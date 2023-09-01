#!/bin/bash
. $(dirname $0)/base_util.sh
. $(dirname $0)/email.cnf

# HDSentinel PATHS
FILE_DIR=$(dirname $0)
HDS_PATH="${FILE_DIR}/HDSentinel"
REP_PATH="/tmp/HDSentinelReport.html"


# Generate Report
logmsg "Generating HDSentinel Report"
${HDS_PATH} -html -r ${REP_PATH}

# Send Report by email
sendMailWithHtmlBody "${EMAIL_FROM}" "${EMAIL_TO}" "${EMAIL_SUBJECT}" "${REP_PATH}"

