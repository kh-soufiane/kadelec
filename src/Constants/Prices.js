import Image1 from "../assets/images/Price/1.png"
import Image2 from "../assets/images/Price/2.png"
import Image3 from "../assets/images/Price/3.png"

export const PRICES_PACKAGES = [
    {
        title:"Growth Package",
        price:"$350",
        image: "/src/assets/images/Price/1.png",
        core: false,
        items:[
            {
                itemTitle: "Advanced Algorithmic Solutions",
                itemStatus: true
            },
            {
                itemTitle: "Trained Personnel Support",
                itemStatus: true
            },
            {
                itemTitle: "Innovative Technology Integration",
                itemStatus: false
            },
            {
                itemTitle: "Powerful Analytics Capabilities",
                itemStatus: false
            },
            {
                itemTitle: "Personalized Solutions",
                itemStatus: false
            },
            {
                itemTitle: "Continuous Innovation",
                itemStatus: false
            }
        ],
        variants:
            {
                hidden:
                {
                    axe:"y",
                    val:75,
                },

                visible:
                {
                    axe:"y",
                    val:0
                },

                transition:{
                    duration:0.5,
                    delay:0.15
                }
            }
        
    },
    {
        title:"Standard Package",
        price:"$1200",
        image: "/src/assets/images/Price/2.png",
        core: true,
        items:[
            {
                itemTitle: "Advanced Algorithmic Solutions",
                itemStatus: true
            },
            {
                itemTitle: "Trained Personnel Support",
                itemStatus: true
            },
            {
                itemTitle: "Innovative Technology Integration",
                itemStatus: true
            },
            {
                itemTitle: "Powerful Analytics Capabilities",
                itemStatus: true
            },
            {
                itemTitle: "Personalized Solutions",
                itemStatus: false
            },
            {
                itemTitle: "Continuous Innovation",
                itemStatus: false
            }
        ],
        variants:
            {
                hidden:
                {
                    axe:"y",
                    val:-75,
                },

                visible:
                {
                    axe:"y",
                    val:0
                },

                transition:{
                    duration:0.5,
                    delay:0.15
                }
            }
    },
    {
        title:"Enterprise Package",
        price:"$7500",
        image: "/src/assets/images/Price/3.png",
        core: false,
        items:[
            {
                itemTitle: "Advanced Algorithmic Solutions",
                itemStatus: true
            },
            {
                itemTitle: "Trained Personnel Support",
                itemStatus: true
            },
            {
                itemTitle: "Innovative Technology Integration",
                itemStatus: true
            },
            {
                itemTitle: "Powerful Analytics Capabilities",
                itemStatus: true
            },
            {
                itemTitle: "Personalized Solutions",
                itemStatus: true
            },
            {
                itemTitle: "Continuous Innovation",
                itemStatus: true
            }
        ],
        variants:
            {
                hidden:
                {
                    axe:"y",
                    val:75,
                },

                visible:
                {
                    axe:"y",
                    val:0
                },

                transition:{
                    duration:0.5,
                    delay:0.15
                }
            }
    },
  ];