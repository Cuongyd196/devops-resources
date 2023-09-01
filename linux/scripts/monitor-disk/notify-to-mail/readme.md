===============
INSTRUCTIONS
===============
Hi thank you for downloading this little script. It will allow you to
set up daily HDSentinel reports delivered to your email. Just follow the steps:



=======================
1. SCRIPT SETUP
   =======================
   First you have to download the latest version of HDSentinel linux binary package.

You can find the latest HDSentinel binary here:
https://www.hdsentinel.com/hard_disk_sentinel_linux.php

Next step is to copy the contents of this zip file to the containing folder of the
HDSentinel linux binary package.

Then give execution permission to the GenerateHDReport.sh script file.
Open a shell script and execute:

shell> cd <DOWNLOAD PATH>
shell> chmod +x GenerateHDReport.sh




=======================
2. EMAIL CONFIGURATION
   =======================
   Open the email.cnf file included in this zip file and put you correct
   email addresses. The configuration file contains three variables explained
   below:

EMAIL_FROM= Your sending email address.
EMAIL_TO= Your recipient email address (you can separate multiple addresses with a comma character)
EMAIL_SUBJECT= The email subject used when sending the email report.

Note: The email is sent using the sendmail command, and installing or
configuring that tool is beyond the scope of this guide.



=======================
3. TEST REPORT
   =======================
   After changing the email configuration file, you can perform a run test
   to check if everything works as expected:

shell> sudo GenerateHDReport.sh

the output of the script should be something like this:

>>-------------------------------------------------
06/05/2019 16:48:13 - Generating HDSentinel Report
Hard Disk Sentinel for LINUX console 0.17x64.8556 (c) 2017 info@hdsentinel.com
Start with -r [reportfile] to save data to report, -h for help

Examining hard disk configuration ...

HDD Device  1: /dev/sdb
HDD Model ID : HGST HTS725050A7E630
HDD Serial No: TF755AWHHTHKKM
HDD Revision : GH2OA500
HDD Size     : 476940 MB
Interface    : S-ATA II
Temperature  : 34 °C
Highest Temp.: 50 °C
Health       : 100 %
Performance  : 100 %
Power on time: 1881 days, 9 hours
Est. lifetime: more than 100 days
The hard disk status is PERFECT. Problematic or weak sectors were not found and there are no spin up or data transfer errors.
No actions needed.

Report file saved as: /tmp/HDSentinelReport.html

06/05/2019 16:48:13 - Sending email TO[destination@email.com] SUBJECT[HDSentinel Report] CONTENT[/tmp/HDSentinelReport.html]
----------------------------------------------------->>



=========================
4. CRONTAB CONFIGURATION
   =========================
   Once you performed the previous steps and verify that you received the
   report in your email's inbox, you can add the following line to your crontab
   to receive the report daily (or however you prefer):

# Edit your crontab:
shell>sudo crontab -e

And add the following line for daily execution at 8am, don't forget to
change the PATH to where the GenerateHDReport.sh script file is located
in your system:

# HDSentinel Daily Report
0 8 * * * /<CHANGE PATH HERE>/GenerateHDReport.sh >> /var/log/HDSentinelReport.log 2>&1

