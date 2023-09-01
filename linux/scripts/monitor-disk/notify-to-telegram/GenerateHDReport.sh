#!/bin/bash

# CONFIG TELEGRAM_BOT
TOKEN_BOT_TELEGRAM="<<TOKEN_BOT_TELEGRAM>>"
CHAT_ID_THEODOI="<<CHAT_ID>>"
# SERVER NAME
SERVER_NAME=${HOSTNAME}

#Function log
logmsg() {
  time=$(date +%d/%m/%Y\ %T)
  echo "$time - $1"
}

# HDSentinel PATHS
FILE_DIR=$(dirname $0)
HDS_PATH="${FILE_DIR}/HDSentinel"
REP_PATH="/report-disk-$SERVER_NAME.html"
echo $FILE_DIR
# Generate Report
logmsg "Generating HDSentinel Report"
${HDS_PATH} -html -r ${REP_PATH}

# Send 1 file to telegram
logmsg "Sending HDSentinel Report to telegram"

# response of api telegram
response="$(curl https://api.telegram.org/bot${TOKEN_BOT_TELEGRAM}/sendDocument?chat_id=${CHAT_ID_THEODOI}\
                   -F document=@${REP_PATH} \
                   -X POST\
                   -s --connect-timeout 10)"

#Status send HDSentinel Report to telegram  true or false
status=$(echo ${response} | grep -o -P '.{0,1}ok.{0,7}')

#Message result
result="Kết quả gửi báo cáo tình trạng ổ đĩa của SERVER: ${SERVER_NAME} tại ngày $(date +%d/%m/%Y\ %T)  là:  ${status}"

logmsg "${result}"

#Send 1 messenger Result to telegram
curl https://api.telegram.org/bot${TOKEN_BOT_TELEGRAM}/sendMessage\
     -X POST\
     -s --connect-timeout 10\
     -d chat_id=${CHAT_ID_THEODOI}\
     -d "text=$result"

#The end
