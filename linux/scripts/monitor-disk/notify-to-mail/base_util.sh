##########################
# BASE UTILIIES LIBRARY
##########################

# Write message to console with timestamp.
# 1: Message
logmsg() {
  time=$(date +%d/%m/%Y\ %T)
  echo "$time - $1"
}


# Returns the substring position
# 1: String
# 2: Substring
strIndex()
{
  x="${1%%$2*}"
  [[ $x = $1 ]] && echo -1 || echo ${#x}
}


# Send email
# 1: Email to
# 2: Email subject
# 3: Email content message
sendMail() {
	logmsg "Sending email: SUBJECT[${1}] CONTENT[${2}] DEST[${EMAIL_ACCOUNTS}]"
	echo "${3}" | mail -s "${2}" "${1}"
}


# Send email with given HTML file as email body
# 1: Email from
# 2: Email to
# 3: Email subject
# 4: Path to HTML file to send as body
sendMailWithHtmlBody() {
	logmsg "Sending email TO[${2}] SUBJECT[${3}] CONTENT[${4}]"
	MAIL_CONTENT=$(<${4})
	
	(
	echo "From: ${1}";
	echo "To: ${2}";
	echo "Subject: ${3}";
	echo "Content-Type: text/html";
	echo "MIME-Version: 1.0";
	echo "";
	echo "${MAIL_CONTENT}";
	) | /sbin/sendmail -t
}
