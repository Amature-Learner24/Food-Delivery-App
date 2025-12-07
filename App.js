import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * - Search
 * - Restaurant Container
 * - Restaurant Card
 * - Image
 * - Name of Restaurant, Star Rating, Cuisines, Delivery Time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://freedesignfile.com/upload/2020/08/Good-food-logos-vector.jpg" alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    );
}

const resList = [
    {
        "info": {
            "id": "10576",
            "name": "Pizza Hut",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
            "locality": "6th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.2,
            "parentId": "721",
            "avgRatingString": "4.2",
            "totalRatingsString": "22K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 05:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "3.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5934",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.1,
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "103K+",
            "sla": {
                "deliveryTime": 16,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 06:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹59"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.2",
                    "ratingCount": "4.3K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "656392",
            "name": "Subway",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
            "locality": "1st Block",
            "areaName": "Koramangala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "sandwich",
                "Salads",
                "wrap",
                "Healthy Food"
            ],
            "avgRating": 4.3,
            "parentId": "2",
            "avgRatingString": "4.3",
            "totalRatingsString": "4.7K+",
            "sla": {
                "deliveryTime": 13,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 03:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23678",
            "name": "McDonald's",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b9564130-be0f-4136-a8e1-6913cf24446d_23678.JPG",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "630",
            "avgRatingString": "4.4",
            "totalRatingsString": "65K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "752437",
            "name": "Amadora Gourmet Ice Cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/18/a0d99957-9f36-43ce-bf8e-01721cbd97af_752437.jpg",
            "locality": "HSR Layout",
            "areaName": "Sector 4",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "parentId": "30800",
            "avgRatingString": "4.7",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 00:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "111"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/amadora-gourmet-ice-cream-hsr-layout-sector-4-rest752437",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "107443",
            "name": "Lo!  Low Carb And Keto Foods",
            "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
            "locality": "HSR Layout",
            "areaName": "HSR",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Healthy Food",
                "Keto",
                "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "669524",
            "avgRatingString": "4.4",
            "totalRatingsString": "7.7K+",
            "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 07:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "High%20Protein/rx%20tag%205.png",
                        "description": "High Protein"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "High Protein",
                                    "imageId": "High%20Protein/rx%20tag%205.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/lo-low-carb-and-keto-foods-layout-hsr-rest107443",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "70012",
            "name": "SMOOR",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/31/60b32d85-3376-4f14-9fcf-01ad9e4a7b7f_70012.JPG",
            "locality": "7th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Asian",
                "Burgers",
                "Italian",
                "Thai",
                "Sushi",
                "Salads",
                "Pastas",
                "Pizzas",
                "Mexican",
                "Chinese"
            ],
            "avgRating": 4.6,
            "parentId": "3506",
            "avgRatingString": "4.6",
            "totalRatingsString": "8.8K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "ABOVE ₹159",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/smoor-7th-block-koramangala-rest70012",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "381854",
            "name": "ITC Sunfeast Baked Creations",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/20/5e618f04-79a0-4867-8154-6eb16bbb9726_381854.JPG",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "bakery",
                "dessert",
                "Cakes & Pastries",
                "Sweets"
            ],
            "avgRating": 4.6,
            "parentId": "12285",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.3K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹149"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "3.3",
                    "ratingCount": "42"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/itc-sunfeast-baked-creations-koramangala-rest381854",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "439636",
            "name": "Madno - House of Sundaes",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/24/de1e1184-f477-430c-9719-9e110d607697_439636.JPG",
            "locality": "5th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "veg": true,
            "parentId": "264082",
            "avgRatingString": "4.0",
            "totalRatingsString": "321",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 04:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹69"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/madno-house-of-sundaes-5th-block-koramangala-rest439636",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "442032",
            "name": "Keventers Waffles & Ice Cream",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/20/145d3118-728b-4f66-8c9e-9a1c6ea2603d_442032.JPG",
            "locality": "7th Block",
            "areaName": "Koramangala",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "parentId": "624796",
            "avgRatingString": "4.4",
            "totalRatingsString": "351",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 05:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹46"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/keventers-waffles-and-ice-cream-7th-block-koramangala-rest442032",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "444178",
            "name": "Magnolia Bakery",
            "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
            "locality": "Indiranagar",
            "areaName": "Indiranagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Ice Cream"
            ],
            "avgRating": 4.7,
            "parentId": "267303",
            "avgRatingString": "4.7",
            "totalRatingsString": "15K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 01:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Ratnesh_Badges/Rx_Awards_2025/Cheesecake.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "7.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/magnolia-bakery-indiranagar-rest444178",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "690684",
            "name": "Burgerama",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/5/eb46c732-4004-4563-88ed-ace5893adccb_690684.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹700 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "8993",
            "avgRatingString": "4.3",
            "totalRatingsString": "2.9K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2025-12-08 06:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹550 OFF",
                "subHeader": "ABOVE ₹2999",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            },
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "104"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-58ef755c-4b8d-441c-8bfa-6c53548c305d"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/burgerama-koramangala-rest690684",
            "type": "WEBLINK"
        }
    },
]


const RestaurantCard = (props) => {
    const { resData } = props;

    const {name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId, } = resData?.info;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                alt="res-logo"
            />
            <h3 className="res-name">{name}</h3>
            <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
            <h4 className="res-rating">{avgRating}   ⭐</h4>
            <h4 className="res-delivery-time">{sla.deliveryTime} mins</h4>
            <h4 className="res-cost-for-two">{costForTwo}</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => {
                        return <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
            </div>
        </div>
    );
}



const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);