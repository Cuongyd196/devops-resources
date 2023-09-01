## 1. Set up Tool hdsentinel
### Download tool
``wget https://www.hdsentinel.com/hdslin/hdsentinel-019c-x64.gz ``

You can find the latest HDSentinel binary here:
https://www.hdsentinel.com/hard_disk_sentinel_linux.php

### gunzip tool
``gunzip hdsentinel-019c-x64.gz``
### Rename
``mv hdsentinel-019c-x64 HDSentinel``
### chmod
``chmod +x HDSentinel``
### Run tool
``sudo ./HDSentinel``

The output should be something like this:
```HDD Device  1: /dev/sdb
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
```

## 2. Cron HDSentinel Report

### SCRIPT SETUP

```GenerateHDReport.sh```

### chmod
``chmod +x GenerateHDReport.sh``

### TEST REPORT

```sudo GenerateHDReport.sh```

The output of the script should be something like this:
```
Generating HDSentinel Report

Start with -r [reportfile] to save data to report, -h for help

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
Report file saved as: -r <path_file>
```

## 3. CRONTAB CONFIGURATION

### Edit your crontab:
```sudo nano /etc/crontab```

### HDSentinel Report at day mon and fri - 9.00 a.m

```3 9 * * mon,fri root /home/cuongnv/deploy/monitor-disk/GenerateHDReport.sh```





