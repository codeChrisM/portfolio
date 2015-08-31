//apartment currently set in array. no DOM interacting yet.

var appartment = [
{
name: "Georgetown apartments" ,
address: "2035-2045 Georgetown Ln, Waukegan, IL 60085 - Northeast Lake County" ,
webURL: "http://www.apartments.com/georgetown-apartments-waukegan-il/yq9x2jv/ " ,
bed: "1 bed",
area: "700 to 800sqft", 
space: 650,
details: "currently 1 opening,  right next to lewis produce.  updated 4.1",
  
elect: "yes",
gas: "yes" ,
water: "yes" ,
 
laundry: "no",
parking: "yes",

apMonthCost:0,
},
{
name: "Georgetown apartments",
address: "2035-2045 Georgetown Ln, Waukegan, IL 60085 - Northeast Lake County",
webURL: "http://www.apartments.com/georgetown-apartments-waukegan-il/yq9x2jv/ ",
bed: "1 bed",
area: "700 to 800sqft", 
space: 700,
details: "advertises 675 but is actually 690, entire apartment includeing stove is electric.",
  
elect: "yes",
gas: "yes",
water: "yes",
 
laundry: "no",
parking: "yes",

apMonthCost:0,
},
{
name: "Georgetown apartments",
address: "2035-2045 Georgetown Ln, Waukegan, IL 60085 - Northeast Lake County",
webURL: "http://www.apartments.com/georgetown-apartments-waukegan-il/yq9x2jv/ ",
bed: "studio",
area: "400to 500sqft", 
space: 475,
  
elect: "yes",
gas: "yes",
water: "yes",
details: "advertises 675 but is actually 690, entire apartment includeing stove is electric.",
 
laundry: "no",
parking: "yes",

apMonthCost:0,
},
{
name: "Cinnamon Lake Towers" ,
address: "2701 W Glen Flora Ave, Waukegan, IL 60085 - Northeast Lake County" ,
webURL: "http://www.apartments.com/cinnamon-lake-towers-waukegan-il/51ghkyq/ " ,
space: 690,
bed: "1 bed" ,
area: "633 Sq Ft - 704 Sq Ft" ,
details: "advertises 675 but is actually 690,  currently have 1 april early may another 690entire apartment includeing stove is electric.",
   
elect: "no",
gas: "no",
water:  "yes" ,       
 
laundry: "no",
parking: "no",

apMonthCost:0,
},

{
name: "Woodstone Village Apartments" ,
address: "1501 Lorelei Dr, Zion, IL 60099 - Northeast Lake County" ,
webURL: " http://www.apartments.com/woodstone-village-apartments-zion-il/pdpy31v/ " ,
bed: "1 bed" ,
area: "645sqft" ,
space: 610,
details: "call may or june for 1 bedroom ",  
  
elect: "no" ,
gas: "no" ,
water:  "yes" ,
garbage: "yes" ,
 
laundry:  "yes" ,
parking: "yes" ,

apMonthCost:0,
},
{
name: "Woodstone Village Apartments" ,
address: "1501 Lorelei Dr, Zion, IL 60099 - Northeast Lake County" ,
webURL: " http://www.apartments.com/woodstone-village-apartments-zion-il/pdpy31v/ " ,
bed: "1 bed" ,
area: "695sqft" ,
space: 675,
  
elect: "no" ,
gas: "no" ,
water:  "yes" ,
garbage: "yes" ,
 
laundry:  "yes" ,
parking: "yes" ,

apMonthCost:0,
},
{
name: "Craig list listing.#1",
address: "waukegan(not identified)",
webURL: "http://chicago.craigslist.org/nch/apa/4931444129.html",
space: 595,
bed: "1 bed",
area: "500sqft",
  
elect: "no",
gas: "yes",
water:  "yes ", 
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},

{
name: "Craig list listing.#3",
address: "536 North ave waukegan ",
webURL: "http://chicago.craigslist.org/nch/apa/4931444129.html",
space: 595,
bed: "studio",
area: "150 sq", 
  
elect: "yes",
gas: "yes",
water:  "yes", 
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},



{
name: "Craig list listing.#4",
address: "various location",
webURL: "http://chicago.craigslist.org/nch/apa/4923716180.html",
space: 675,
bed: "1br",
area: "unknowen", 
  
elect: "no",
gas: "no",
water:  "no",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},



{
name: "Craig list listing.#5",
address: "4344 McClure Road #1, Gurnee, IL 60031",
webURL: "http://chicago.craigslist.org/nch/apa/4905284388.html",
space: 687,
bed: "1br",
area: "625", 
  
elect: "no",
gas: "no",
water:  "no",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},

{
name: "Craig list listing.#7",
address: "6808 31st ave kenosha, wi",
webURL: "http://racine.craigslist.org/apa/4935638047.html",
space: 650,
bed: "2br",
area:  "900",
  
elect: "no",
gas: "no",
water:  "no",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},


{
name: "Craig list listing.#8",
address: "2800 mt pleasant st. #13, racine, wi 53404",
webURL: "http://racine.craigslist.org/apa/4906013856.html",
space: 425,
bed: "studio",
area:  "900",
  
elect: "no",
gas: "no",
water:  "yes",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},


{
name: "Craig list listing.#8",
address: "5121  25th Avenue Kenosha, WI    53140",
webURL: "https://www.apartmentlist.com/listing#u38833838",
space: 700,
bed: "2 Bedrooms (house)",
area: "??",
  
elect: "no",
gas: "no",
water:  "no",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},


{
name: "Craig list listing.#9",
address: "2024 hebron ave zion, il 60099",
webURL: "https://www.apartmentlist.com/il/zion/2024-hebron-avenue",
space: 750,
bed: "2 Bd",
area: "1000",
  
elect: "tbd",
gas: "TBD",
water:  "TBD",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},


{
name: "Craig list listing.#10",
address: "232 n. genesse st. waukegan 60085",
webURL: "https://www.apartmentlist.com/il/zion/2024-hebron-avenue",
space: 625,
bed: "1 Bd",
area: "??",
  
elect: "TBD",
gas: "TBD",
water:  "TBD",
laundry:  "yes",
parking: "yes",

apMonthCost:0,
},
  {
name: "onan place apartments" ,
address: "waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/1000060882.php" ,
bed: "1 bed",
area: "612sqft", 
space: 675,
details: "all ecectric, fit center, walk incloset underground parking, right off of grand, neweer building build in 2015",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "no",
parking: "yes",

apMonthCost:0,
},
  {
name: "King's court" ,
address: "2801 grandville ave waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/1034151.php" ,
bed: "1 bed",
area: "800sqft", 
space: 699,
details: "pool,no pet policy, need make between  make no more then $38,000, no pet policy",
  
elect: "no",
gas: "yes" ,
water: "yes" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
 
        {
name: "Green bay Manner" ,
address: "waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/1000060445.php" ,
bed: "1 bed",
area: " tbd sqft", 
space: 700,
details: "pet policy, undergorund parking garage",
  
elect: "no",
gas: "yes" ,
water: "no" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
          {
name: "Garden Park apartments" ,
address: "waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/1000475090.php" ,
bed: "1 bed",
area: " BIG sqft", 
space: 725,
details: "big room, all electric apartment.",
  
elect: "no",
gas: "no" ,
water: "yes" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
            {
name: "Harbor Lake" ,
address: "waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/1000060445.php" ,
bed: "1 bed",
area: " 710 sqft", 
space: 734,
details: "internet access, swiming pool, tennis court",
  
elect: "no",
gas: "yes" ,
water: "no" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
              {
name: "Fox crest" ,
address: "waukegan, il" ,
webURL: "http://www.forrent.com/apartment-community-profile/999907833.php" ,
bed: "1 bed",
area: " 725 sqft", 
space: 725,
details: "running paths and creek near by",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
{
name: "Craigs list  Pioneer Court Apartments" ,
address: "900 Pioneer waukegan, il" ,
webURL: "http://chicago.craigslist.org/nch/apa/4998253480.html" ,
bed: "1 bed",
area: " 800 sqft", 
space: 725,
details: "next to dotty's heaat and water included  One-time non-refundable move in fee of $250. No security deposit. $25 per adult to apply.",
phone:"847 651-5006",
  
elect: "no",
gas: "tbd" ,
water: "yes" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},

{
name: "Craigs listing" ,
address: "green bay/washington waukegan, il" ,
webURL: "http://chicago.craigslist.org/nch/apa/4998253480.html" ,
bed: "1 bed",
area: " 550 sqft", 
space: 650,
details: "engegry efficent windows, no pets privetly owended. nice place. goo location  available may 17.",
phone:"1-847-244-6448 or 1-224-627-5954.",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
{
name: "Craigs list 14" ,
address: "930 W. Rollins Rd. Round Lake Heights" ,
webURL: "https://chicago.craigslist.org/nch/apa/5015140137.html" ,
bed: "1 bed",
area: " 525 sqft", 
space: 700,
details: "Remodeled 1 bedroom with new kitchen and bath with ceramic floors, free heat available June 1",
phone:"?",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},

{
name: "Craigs list 15" ,
address: "park city" ,
webURL: "https://chicago.craigslist.org/nch/apa/5015140137.html" ,
bed: "1 bed",
area: "616 sqft", 
space: 725,
details: "Can't beat this price of only $725 a month and 1st months rent free.
This home won't last long...Beautiful home waiting for you!",
phone:"847-662-8110",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},
{
name: "Craigs list AWESOME 16" ,
address: "waukegan" ,
webURL: "https://chicago.craigslist.org/nch/apa/5010988820.html" ,
bed: "studio",
area: "600 sqft", 
space: 495,
details: "Great unit in Waukegan, multiunit building - close to bus and shopping area. 
Large closets and great views! Laundry is in the building!
Property Manager lives on site - very well maintained building. 
Parking is available. Garage is an option
Available June 1!",
phone:"",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",

apMonthCost:0,
},

{
name: "Craigs list  17" ,
address: "gurnee" ,
webURL: "https://chicago.craigslist.org/nch/apa/4970744759.html" ,
bed: "studio",
area: "625-700sqft", 
space: 707,
details: "Located near great shopping and Six Flags Great America, Carriage House Apartments offer spacious one bedroom apartments with laundry in each building. Parking is free, our apartments are pet-friendly, and our maintenance staff is available 24 hours. Relax by our swimming pool during the warm summer months and see our beautifully landscaped grounds for yourself. 

Rent information:
$687 for 625 sq. feet
$707 for 650 sq. feet
$757 for 700 sq. feet",
phone:"847-224-1616",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "muldine" ,
address: "mundelin" ,
webURL: "http://www.forrent.com/apartment-community-profile/1000910.php" ,
bed: "studio",
area: "TBD", 
space: 725,
details: "near freway 22 min to six flags 18 to deer park",
phone:"866-819-2527",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "lincoln garfield apartments" ,
address: "506 lincoln, ingleside, il 60041" ,
webURL: "http://www.rent.com/illinois/ingleside-apartments/lincoln-garfield-apartments-fox-lake-4-536282" ,
bed: "1 bedroom",
area: "610ft", 
space: 725,
details: "30 minutes for both of us to travel to work, cats and dogs allowed",
phone:"(847) 629-0474",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},

{
name: "Park Terrace" ,
address: "4100 Greenleaf, Park City IL 60085 " ,
webURL: "http://www.rent.com/illinois/park-city-apartments/park-terrace-4-100012330" ,
bed: "1 bedroom",
area: "700ft", 
space: 730,
details: "cats ok internet ready high speed, where brian and nicle use to live",
phone:"(847) 739-9214",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Willow Wind Apartments" ,
address: "2640 N Delany Rd, Waukegan IL 60087" ,
webURL: "http://www.rent.com/illinois/waukegan-apartments/willow-wind-apartments-4-1311755" ,
bed: "1 bedroom",
area: "700ft", 
space: 700,
details: "$1 a square foot",
phone:"(224) 772-1063",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Madison West Apartments" ,
address: "515 West Madison Street, Waukegan IL 60085 " ,
webURL: "http://www.rent.com/illinois/waukegan-apartments/madison-west-apartments-4-549275" ,
bed: "1 bedroom",
area: "700ft", 
space: 695,
details: " also has a studio of 450 F for only 595",
phone:"(847) 379-5966",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Madison West Apartments" ,
address: "515 West Madison Street, Waukegan IL 60085 " ,
webURL: "http://www.rent.com/illinois/waukegan-apartments/madison-west-apartments-4-549275" ,
bed: "1 bedroom",
area: "700ft", 
space: 695,
details: " also has a studio of 450 F for only 595",
phone:"(847) 379-5966",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Horizon Village" ,
address: "1302 Wilmont Avenue, Twin Lakes WI 53181" ,
webURL: "http://www.rent.com/illinois/zion-apartments/horizon-village-4-434214" ,
bed: "2 bedroom",
area: "720ft", 
space: 725,
details: "50 minutes for both of us to work. middle of no where but is a 2 bed. cats ok",
phone:"(262) 671-0056",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Horizon Village" ,
address: "1302 Wilmont Avenue, Twin Lakes WI 53181" ,
webURL: "http://www.rent.com/illinois/zion-apartments/horizon-village-4-434214" ,
bed: "2 bedroom",
area: "720ft", 
space: 725,
details: "50 minutes for both of us to work. middle of no where but is a 2 bed. cats ok",
phone:"(262) 671-0056",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "private owner 1" ,
address: "523 W Greenwood Ave
Waukegan, IL 60087" ,
webURL: "http://www.trulia.com/rental/3172388910-523-W-Greenwood-Ave-Waukegan-IL-60087#photo-2" ,
bed: "1 bedroom",
area: "600ft", 
space: 595,
details: "thquite northern side of waukegan",
phone:"(847) 379-5232",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "private owner 2" ,
address: "2040 N Pine St #2 Waukegan, IL 60087" ,
webURL: "http://www.trulia.com/rental/3139723224-2040-N-Pine-St-2-Waukegan-IL-60087#photo-2" ,
bed: "1 bedroom",
area: "600ft", 
space: 700,
details: "...eh",
phone:"(847) 672-4429",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},
{
name: "Hinkston Pond Apts" ,
address: "2040 N Pine St #2 Waukegan, IL 60087" ,
webURL: "http://www.trulia.com/rental/3139723224-2040-N-Pine-St-2-Waukegan-IL-60087#photo-2" ,
bed: "1 bedroom",
area: "800ft", 
space: 675,
details: "...eh",
phone:"(224) 610-0335",
  
elect: "tbd",
gas: "tbd" ,
water: "tbd" ,
 
laundry: "yes",
parking: "yes",
available:"TBD 5/9"

apMonthCost:0,
},


];
