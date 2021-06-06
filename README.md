# Paiye
The Car Managing Application

What do you want to do?
- Save User Data
  ```
  Request:
    {
        email:String
    }
  Reponse:
    {
        !error
    }
- Save car information
    ```
  Request:
    {
        id:String,
        company:String,
        model:String,
        make:String,
        color:String
    }
  Reponse:
    {
        !error
    }
- List car information
    ```
  Request:
    {}
  Reponse:
    {
        cars:
        [
            {
                id:String,
                company:String,
                model:String,
                make:String,
                color:String
            }
        ]
    }
- Record oil change
    ```
  Request:
    {
        oilType:String,
        meterReading:Number,
        date:Date,
        oilPrice:Number,
        oilFilterPrice:Number,
        airFilter:Boolean,
        airFilterPrice:Number,
        nextOilChange:Number,
        expiryDate:Date,
        note:String
    }
  Response:
    {
        !error
    }
- Record distance travelled
    ```
  Request:
    {
        startDateTime:String,
        endDateTime:String,
        distance:Number,
        carId:String
    }
  Reponse:
    {
        !error
    }
- Car maintainence