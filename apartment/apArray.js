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
name: "Craigs list  Pioneer Court Apartments" ,
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

];
