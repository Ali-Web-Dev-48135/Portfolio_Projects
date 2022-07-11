import {v4 as uuidv4} from "uuid";

// Special thanks to google for the images used in this project.
// The images were found by a basic google search and downloading 
// the images from there website.

const WarehouseItems = [    
    {
        Item: "Handy Screw Driver",
        Price: 20.00,
        Quantity: 5,
        ImageUrl: "/images/Screw_Driver_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Heavy Duty Wrench",
        Price: 10.00,
        Quantity: 15,
        ImageUrl: "/Images/Wrench_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Lawn Mower",
        Price: 75.00,
        Quantity: 3,
        ImageUrl: "/Images/Lawn_Mower_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Butcher Knive",
        Price: 15.00,
        Quantity: 5,
        ImageUrl: "/Images/Butcher_Knive_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Water Hose",
        Price: 7.00,
        Quantity: 12,
        ImageUrl: "/Images/Water_Hose_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Fullset Toolbox",
        Price: 80.00,
        Quantity: 5,
        ImageUrl: "/Images/Tool_Box_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Heavy Duty Ladder",
        Price: 110.00,
        Quantity: 2,
        ImageUrl: "/Images/Ladder_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Heavy Duty Hammer",
        Price: 25.00,
        Quantity: 5,
        ImageUrl: "/Images/Heavy_Duty_Hammer_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Window Cleaner",
        Price: 15.00,
        Quantity: 5,
        ImageUrl: "/Images/Window_Cleaner_Image.jpg",
        Id: uuidv4(),
    },
    {
        Item: "Power Drill",
        Price: 15.00,
        Quantity: 5,
        ImageUrl: "/Images/Power_Drill_Image.jpg",
        Id: uuidv4(),
    },


];

export default WarehouseItems;