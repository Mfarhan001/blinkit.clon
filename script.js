
let herosection = document.getElementById("herosection");
console.log(herosection);




let product = [
    {
        img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d86fa99d-affa-482c-b7ff-3fbd2badb413.jpg?ts=1730894517",
        title: "Aashirvaad Select 100%",
        subtitle: "MP Sharbati Atta",
        kg: "5 kg",
        price: "Rs316",
        mrp: "RS361",
        button: "ADD"
    },
    {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/da/cms-assets/cms/product/4bd9a25b-9a7a-4130-87ce-2cb2d184665f.jpg?ts=1733471277",
        title: "Aashirvaad Shudh",
        subtitle: "Chakki Atta(100% Atta....)",
        kg: "10 kg",
        price: "Rs558",
        mrp: "RS542",
        button: "ADD"
    },
    {
        img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/sliding_image/174379a.jpg?ts=1672037249",
        title: "Silver Coin Traditional",
        subtitle: "Chakki Atta",
        kg: "5 kg",
        price: "Rs226",
        mrp: "RS290",
        button: "ADD"
    },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=120,h=120/app/images/products/sliding_image/174379a.jpg?ts=1672037249",
    title: "Silver Coin Traditional",
    subtitle: "Chakki Fresh Atta",
    kg: "1 kg",
    price: "Rs50",
    mrp: "RS62",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e9fe9166-122a-4599-b1a3-77dce820db7a.jpg?ts=1721242870",
    title: "Fortune Chakki Fresh",
    subtitle: "(1005 Atta, 0% Maida)...",
    kg: "5 kg",
    price: "Rs236",
    mrp: "RS253",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d86fa99d-affa-482c-b7ff-3fbd2badb413.jpg?ts=1730894517",
    title: "aashirvaad Select 100%",
    subtitle: "MP Sharbati Atta",
    kg: "5 kg",
    price: "Rs316",
    mrp: "RS361",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/1648f481-8d90-45c1-be07-7623e3fc4eaa.jpg?ts=1730894527",
    title: "Aashirvaad High Fiber",
    subtitle: "Atta With Multigrains..",
    kg: "5 kg",
    price: "Rs323",
    mrp: "RS374",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/174378a.jpg?ts=1672037248",
    title: "Sliver Coin Traditional",
    subtitle: "Chakki Fresh Atta 10 kg",
    kg: "10kg",
    price: "Rs440",
    mrp: "RS535",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/432b4f48-b68a-42ec-aff4-790b0977cc8f.jpg?ts=1720100212",
    title: "Patanjali Whole Wheat",
    subtitle: "Chakki Atta9 (with Bran)..",
    kg: "5 kg",
    price: "Rs238",
    mrp: "RS243",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534355a.jpg",
    title: "Talati Bafla Flour",
    subtitle: "MP Sharbati Atta",
    kg: "1 kg",
    price: "Rs54",
    mrp: "RS70",
    button: "ADD"
   },
   {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/ba9f113a-5f23-4a33-a475-3010ccb36c91.jpg?ts=1739529526",
    title: "Better Nutrition",
    subtitle: "Biofortified Wheat Atta",
    kg: "2 kg",
    price: "Rs135",
    mrp: "RS200",
    button: "ADD"
   },
  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bc25f50a-098c-48b1-895f-7ab5f70fecac.jpg?ts=1742469724",
    title: "24 Mantra Organic",
    subtitle: "Whole Wheat Atta",
    kg: "5 kg",
    price: "Rs330",
    mrp: "RS395",
    button: "ADD"
  },
  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e156dfe2-509b-423c-bdb6-4833f95a4a7e.jpg?ts=1742386572",
    title: "Lo! Foods Ultra LOw",
    subtitle: "Carb Keto Atta..",
    kg: "500 g",
    price: "Rs284",
    mrp: "RS319",
    button: "ADD"
  },


  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b13c7db3-066c-431d-9da7-416dcf342122.jpg?ts=1713633747",
    title: "Organic Tattva Wheat",
    subtitle: "Organic Atta 1kg",
    kg: "1 kg",
    price: "Rs66",
    mrp: "RS80",
    button: "ADD"
  },

  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9aefdf30-0fb9-4822-a5dd-940b27215407.jpg?ts=1713633883",
    title: " Organic Tattva",
    subtitle: "Multigrain OrganicAtta",
    kg: "1 kg",
    price: "Rs101",
    mrp: "RS195",
    button: "ADD"
  },
  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/128ea161-7c8c-4bc7-a2a3-10decb6451e9.jpg?ts=1742469933",
    title: "24 Mantra Organic 7",
    subtitle: "Grin Atta",
    kg: "1kg",
    price: "Rs114",
    mrp: "RS125",
    button: "ADD"
  },

  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/bc25f50a-098c-48b1-895f-7ab5f70fecac.jpg?ts=1742469724",
    title: "24 Mantra Organic",
    subtitle: "Whole Wheat Atta",
    kg: "5 kg",
    price: "Rs330",
    mrp: "RS395",
    button: "ADD"
  },

  {
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a1f47485-7bc9-4b1c-960c-a02dbf2fc507.jpg?ts=1707977072",
    title: "Organic Tattva Wheat",
    subtitle: "Organic Atta 5 kg",
    kg: "5 kg",
    price: "Rs334",
    mrp: "RS449",
    button: "ADD"
  },




];

product.map((data) => {
    let box = document.createElement("div");
    box.className = "box";  
    box.innerHTML = `
        <img src="${data.img}" alt="Product Image"/>
        <h3>${data.title}</h3>
        <h4>${data.subtitle}</h4>
        <h4>${data.kg}</h4>
        <h4>${data.price}</h4>
        <p>${data.mrp}</p>
        <button>${data.button}</button>
    `;
    herosection.appendChild(box);
   
});