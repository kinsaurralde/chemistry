# Chemistry

View website: https://chemistry.kinsaurralde.com/

### Website Features: 
- Strong Acid / Base Titration types 
- Change number of cycles used in calculations 
- Set molarity and volume of acid and base used 
- Display calculated results in data table 
- Download data as csv 
- Graph Volume of titrant added vs pH 
- Download graph data as csv 
- Display generated url to collect data and response time

### Tiration Calculator v1.0.0 Features:
- Running c++ on aws lambda
    - Repository at: https://github.com/kinsaurralde/titration
- Strong Acid / Base Titration types
- Change number of cycles used in calculations
- Set molarity and volume of acid and base used
- Display calculation results to screen and file
- Write data to csv file
- Display runtime
- Switch between local and aws run type
- Command line arguments for extra options
    - -n [integer] : change number of calculation cycles
    - -t [type name] : change type (must be "SASB" or "SBSA")
    - -f [path to file] : read configuration from given file (check samples in configuration folder for correct format)
    - -s [integer] : change preset sample (0, 1, or 2)
    - -b [optional] : run faster by not printing to screen (type any character after -b if used as last argument) 
    - -ttc [number] : change concentration of titrant
    - -ttv [number] : change volume of titrant
    - -tdc [number] : change concentration of titrand
    - -tdv [number] : change volume of titrand
