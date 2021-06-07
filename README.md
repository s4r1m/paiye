# Paiye
The Car Managing Application

What do you want to do?
- Register User
    ```
    Request:
    {
        email:String
    }
    Reponse:
    {
        !error
    }
- Save Car
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
- List Cars
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
- Record Oil Change
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
- Record Distance Travelled
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
- Car Maintenance
