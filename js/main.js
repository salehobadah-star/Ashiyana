/* =========================================
   ASHIYANA GROUP - Main JavaScript
   Navigation, Filters, Animations, Data
   Dedicated Building & Civil Contracting LLC
   ========================================= */

// ── All 89 Projects Data ──
const PROJECTS = [
  { id:1, title:"Olaia", slug:"olaia", location:"Palm Jumeirah", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_1.jpeg", tag:"Dubai", scope:"Main Building Contractor - Civil, Structure, MEP & Premium Finishing", area:"285,000 Sq. Ft.", status:"Completed", client:"Private Luxury Developer" },
  { id:2, title:"La Clé", slug:"la-cle", location:"Al Furjan", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_2.jpg", tag:"Dubai", scope:"Full Construction & Engineering Works - G+10 Residential & Commercial Tower", area:"195,000 Sq. Ft.", status:"Ongoing Construction", client:"Al Furjan Developments" },
  { id:3, title:"Floareá Grandé", slug:"florea-grande", location:"Arjan", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_3.png", tag:"Dubai", scope:"Turnkey Building Contracting - Substructure, Superstructure, MEP & Facade", area:"240,000 Sq. Ft.", status:"Under Construction", client:"Mashriq Holding" },
  { id:4, title:"Parkside Boulevard", slug:"parkside-boulevard", location:"Arjan", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_4.jpg", tag:"Dubai", scope:"Main Civil Contracting & Structural Execution", area:"210,000 Sq. Ft.", status:"Completed 2024", client:"Boulevard Heights" },
  { id:5, title:"Square X", slug:"square-x", location:"JVC", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_5.jpg", tag:"Dubai", scope:"General Contracting, Civil Engineering & High-End Exterior Works", area:"225,000 Sq. Ft.", status:"Completed 2024", client:"Square Developments" },
  { id:6, title:"Enqlave", slug:"enqlave", location:"Discovery Gardens", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_6.jpg", tag:"Dubai", scope:"General Contracting & MEP Installation", area:"180,000 Sq. Ft.", status:"Completed 2024", client:"Aqasa Contracting" },
  { id:7, title:"10 Oxford", slug:"10-oxford", location:"JVC", categories:["COMMERCIAL","RESIDENTIAL"], image:"images/projects/project_7.png", tag:"Dubai", scope:"Civil Engineering, Structure Fabrication & Landscaping", area:"190,000 Sq. Ft.", status:"Completed 2024", client:"Iman Developers" },
  { id:8, title:"Oxford Gardens", slug:"oxford-gardens", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_8.jpg", tag:"Dubai", scope:"Main Building Contractor - G+10 Residential Building & Amenities", area:"210,000 Sq. Ft.", status:"Completed 2023", client:"Iman Developers" },
  { id:9, title:"Spinney's HQ and Retail", slug:"spinneys", location:"Meydaan", categories:["COMMERCIAL"], image:"images/projects/project_9.jpg", tag:"Dubai", scope:"Commercial Complex Construction, Steel Erection & Retail Fit-out Contracting", area:"310,000 Sq. Ft.", status:"Completed", client:"Spinneys UAE" },
  { id:10, title:"Oxford 212", slug:"oxford-212", location:"JVC", categories:["RESIDENTIAL"], image:"images/projects/project_10.png", tag:"Dubai", scope:"Structural Civil Works, Reinforced Concrete Frame & MEP Integration", area:"165,000 Sq. Ft.", status:"Completed", client:"Iman Developers" },
  { id:11, title:"The Grove", slug:"grove-height-2", location:"Dubai Hills", categories:["RESIDENTIAL"], image:"images/projects/project_11.png", tag:"Dubai", scope:"Main Contractor - Luxury G+9 Residential Building", area:"210,000 Sq. Ft.", status:"Completed 2024", client:"Ashiyana Contracting Portfolio" },
  { id:12, title:"Santorini Residence", slug:"santorini", location:"Studio City", categories:["RESIDENTIAL"], image:"images/projects/project_12.png", tag:"Dubai", scope:"Turnkey Construction & Civil Works", area:"175,000 Sq. Ft.", status:"Completed", client:"Studio City Holdings" },
  { id:13, title:"Park Views Residence", slug:"park-views", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_13.jpg", tag:"Dubai", scope:"Main Civil Contractor - Structural Works & Facades", area:"150,000 Sq. Ft.", status:"Completed", client:"Arjan Investments" },
  { id:14, title:"Floareá Residence", slug:"florea-residences", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_14.jpg", tag:"Dubai", scope:"General Building Contracting & Landscaping Execution", area:"185,000 Sq. Ft.", status:"Completed", client:"Mashriq Holding" },
  { id:15, title:"Marquis Signature", slug:"marquis-signature", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_15.jpg", tag:"Dubai", scope:"High-rise Structural Construction & MEP Engineering", area:"230,000 Sq. Ft.", status:"Completed", client:"Marquis Point" },
  { id:16, title:"Altia One", slug:"altia-one", location:"DSO", categories:["RESIDENTIAL"], image:"images/projects/project_16.jpg", tag:"Dubai", scope:"Civil Engineering & Main Building Contracting", area:"140,000 Sq. Ft.", status:"Completed", client:"Silicon Oasis Investments" },
  { id:17, title:"Avelon Boulevard", slug:"avelon-boulevard", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_17.jpg", tag:"Dubai", scope:"Substructure, Foundation Piling Supervision & Superstructure Execution", area:"195,000 Sq. Ft.", status:"Completed", client:"Avelon Developments" },
  { id:18, title:"Al Ghaf Residences", slug:"al-ghaf-residences", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_18.png", tag:"Dubai", scope:"Complete Building Contracting & Exterior Landscaping", area:"160,000 Sq. Ft.", status:"Completed", client:"Al Ghaf Properties" },
  { id:19, title:"MYKA Residences", slug:"myka-residences", location:"Production City", categories:["RESIDENTIAL"], image:"images/projects/project_19.png", tag:"Dubai", scope:"Civil Construction & Finishing Work", area:"145,000 Sq. Ft.", status:"Completed", client:"MYKA Real Estate" },
  { id:20, title:"Amara Residences", slug:"amara-residences", location:"JVC", categories:["RESIDENTIAL"], image:"images/projects/project_20.jpg", tag:"Dubai", scope:"Main Structural & Electrical Contracting", area:"170,000 Sq. Ft.", status:"Completed", client:"Amara Group" },
  { id:21, title:"Nord Anglia Housing", slug:"nord-anglia-housing", location:"Arjan", categories:["RESIDENTIAL"], image:"images/projects/project_21.png", tag:"Dubai", scope:"Residential Facilities Construction & Steel Truss Roofing", area:"135,000 Sq. Ft.", status:"Completed", client:"Nord Anglia Education" },
  { id:22, title:"Leejam Sports Centre (Fitnesstime)", slug:"leejam-sports-centre", location:"Sharjah", categories:["RECREATIONAL"], image:"images/projects/project_22.jpg", tag:"Sharjah", scope:"Sports Complex Contracting, Steel Fabrication & Olympic Pool Civil Works", area:"95,000 Sq. Ft.", status:"Completed", client:"Leejam Sports Company" },
  { id:23, title:"Alya Residence", slug:"alya-residence", location:"Jumeirah Garden City", categories:["RESIDENTIAL"], image:"images/projects/project_23.png", tag:"Dubai", scope:"General Civil Contracting & Foundation Excavation", area:"120,000 Sq. Ft.", status:"Completed", client:"Private Client" },
  { id:24, title:"Janahi and Ahmed Rabee Building", slug:"janahi-and-ahmed-rabee-building", location:"Souq al Kabeer", categories:["RESIDENTIAL"], image:"images/projects/project_24.jpg", tag:"Dubai", scope:"Commercial/Residential Mixed Structure Construction", area:"110,000 Sq. Ft.", status:"Completed", client:"Janahi Holdings" },
  { id:25, title:"Agarwal Villa", slug:"agarwal-villa", location:"Dubai Hills", categories:["PRIVATE VILLA"], image:"images/projects/project_25.png", tag:"Dubai", scope:"Luxury Custom Villa Construction & Swimming Pool Landscaping", area:"18,000 Sq. Ft.", status:"Completed", client:"Private Owner" },
  { id:26, title:"Ms Farishtae Villa", slug:"ms-farishtae-villa", location:"Nad al Sheba", categories:["PRIVATE VILLA"], image:"images/projects/project_26.jpg", tag:"Dubai", scope:"Custom Residential Villa Contracting & Exterior Fit-out", area:"15,500 Sq. Ft.", status:"Completed", client:"Private Owner" },
  { id:27, title:"Sharjah Warehouse and Showrooms", slug:"sharjah-warehouse-and-showrooms", location:"Sharjah", categories:["WAREHOUSE"], image:"images/projects/project_27.png", tag:"Sharjah", scope:"Heavy Steel Structure Fabrication, Erection & Showroom Fit-out", area:"150,000 Sq. Ft.", status:"Completed", client:"Sharjah Commercial Corp" },
  { id:28, title:"Nobel Residence", slug:"nobel-residence", location:"Dubai South", categories:["RECREATIONAL","RESIDENTIAL"], image:"images/projects/project_28.png", tag:"Dubai", scope:"Building Contracting & Recreation Facility Construction", area:"160,000 Sq. Ft.", status:"Completed", client:"Nobel Properties" },
  { id:29, title:"Mheiri Building", slug:"mheiri-building", location:"Warsan", categories:["RECREATIONAL","RESIDENTIAL"], image:"images/projects/project_29.png", tag:"Dubai", scope:"Reinforced Concrete Structure & Mechanical Contracting", area:"130,000 Sq. Ft.", status:"Completed", client:"Mheiri Family Office" },
  { id:30, title:"BHNS Building", slug:"bhns", location:"Souq al Kabeer", categories:["RESIDENTIAL"], image:"images/projects/project_30.png", tag:"Dubai", scope:"Urban In-fill Civil Construction & Facade Contracting", area:"90,000 Sq. Ft.", status:"Completed", client:"BHNS Group" },
  { id:31, title:"Sulthan Building", slug:"sulthan-building", location:"Warqaa", categories:["RESIDENTIAL"], image:"images/projects/project_31.png", tag:"Dubai", scope:"Structural Engineering & G+4 Residential Construction", area:"85,000 Sq. Ft.", status:"Completed", client:"Sulthan Al-Qubaisi" },
  { id:32, title:"Taufiq.M Building", slug:"taufiq-building", location:"Maliha Rd", categories:["RESIDENTIAL"], image:"images/projects/project_32.png", tag:"Dubai", scope:"Main Contractor - Concrete Structure & MEP", area:"78,000 Sq. Ft.", status:"Completed", client:"Taufiq Holdings" },
  { id:33, title:"Manu Jeswani Villa", slug:"manu-jeswani-villa", location:"Emirates Hills", categories:["PRIVATE VILLA"], image:"images/projects/project_33.png", tag:"Dubai", scope:"Ultra-Luxury Villa Civil Construction & Custom Marble/Steel Work", area:"22,000 Sq. Ft.", status:"Completed", client:"Jeswani Family" },
  { id:34, title:"Mansoori Building", slug:"mansoori-building", location:"Lesaily", categories:["RESIDENTIAL"], image:"images/projects/project_34.png", tag:"Dubai", scope:"Building Contracting & Interior Fit-out Works", area:"65,000 Sq. Ft.", status:"Completed", client:"Al Mansoori Estate" },
  { id:35, title:"Liwa Building", slug:"liwa-building", location:"Al Quoz", categories:["RESIDENTIAL"], image:"images/projects/project_35.png", tag:"Dubai", scope:"Civil Engineering & MEP Contracting Services", area:"72,000 Sq. Ft.", status:"Completed", client:"Liwa Investments" },
  { id:36, title:"Jumeirah Islands Dual Villa", slug:"jumeirah-islands-dual-villa", location:"Jumeirah Islands", categories:["PRIVATE VILLA"], image:"images/projects/project_36.png", tag:"Dubai", scope:"Twin Luxury Villa Contracting & Waterfront Retaining Structure", area:"26,000 Sq. Ft.", status:"Completed", client:"Private Owner" },
  { id:37, title:"Ahmed Rabee Building", slug:"ahmed-rabee-building", location:"Al Warqaa", categories:["RESIDENTIAL"], image:"images/projects/project_37.png", tag:"Dubai", scope:"Residential Building Structural & Architectural Construction", area:"92,000 Sq. Ft.", status:"Completed", client:"Ahmed Rabee" },
  { id:38, title:"ELECTRIC WAY FZCO", slug:"electric-way", location:"Technopark", categories:["COMMERCIAL","RECREATIONAL","WAREHOUSE"], image:"images/projects/project_38.png", tag:"Dubai", scope:"Industrial Park Complex - Steel Fabrication, Showroom & Warehouses", area:"220,000 Sq. Ft.", status:"Completed", client:"Electric Way FZCO" },
  { id:39, title:"Akhund Building", slug:"akhund-building", location:"Burj Nahar – Naif", categories:["COMMERCIAL"], image:"images/projects/project_39.png", tag:"Dubai", scope:"Commercial Building In-fill Construction & Facade Erection", area:"80,000 Sq. Ft.", status:"Completed", client:"Akhund Trading" },
  { id:40, title:"Mohd. Bin Shaikh Mosque", slug:"mohd-bin-shaikh-mosque", location:"Jumeirah", categories:["RECREATIONAL"], image:"images/projects/project_40.png", tag:"Dubai", scope:"Islamic Architectural Civil Contracting, Minaret & Dome Construction", area:"35,000 Sq. Ft.", status:"Completed", client:"Islamic Affairs & Charitable Activities Dept" },
  { id:41, title:"T.Mubarak Storage Facility", slug:"t-mubarak-storage-facility", location:"Ras Al Khor", categories:["WAREHOUSE"], image:"images/projects/project_41.png", tag:"Dubai", scope:"Steel Frame Storage Shed Fabrication & Industrial Floor Slab Contracting", area:"115,000 Sq. Ft.", status:"Completed", client:"Mubarak Logistics" },
  { id:42, title:"Al Mansoori Building", slug:"al-mansoori-building", location:"Al Murar", categories:["RESIDENTIAL"], image:"images/projects/project_42.png", tag:"Dubai", scope:"Turnkey Civil Building Construction", area:"98,000 Sq. Ft.", status:"Completed", client:"Al Mansoori" },
  { id:43, title:"Redha Building", slug:"redha-building", location:"Souq al Kabeer", categories:["RESIDENTIAL"], image:"images/projects/project_43.png", tag:"Dubai", scope:"Concrete Structural Framework & Utility Contracting", area:"88,000 Sq. Ft.", status:"Completed", client:"Redha Group" },
  { id:44, title:"Tasheel Building", slug:"tasheel-building", location:"Ras Al Khor", categories:["COMMERCIAL"], image:"images/projects/project_44.png", tag:"Dubai", scope:"Government Service Center Building Construction & Steel Truss Roof", area:"45,000 Sq. Ft.", status:"Completed", client:"Tasheel UAE" },
  { id:45, title:"Saxena Villa", slug:"saxena-villa", location:"Arjan", categories:["PRIVATE VILLA"], image:"images/projects/project_45.png", tag:"Dubai", scope:"Modern Villa Civil Contracting & Exterior Landscaping", area:"14,000 Sq. Ft.", status:"Completed", client:"Saxena Family" },
  { id:46, title:"Adnani Villa", slug:"adnani-villa", location:"Dubai Land", categories:["PRIVATE VILLA"], image:"images/projects/project_46.png", tag:"Dubai", scope:"Luxury Villa Construction & Boundary Wall Erection", area:"16,500 Sq. Ft.", status:"Completed", client:"Adnani Estate" },
  { id:47, title:"Mazrouqi Commercial Villa", slug:"mazrouqi-commercial-villa", location:"Mirdiff", categories:["COMMERCIAL","PRIVATE VILLA"], image:"images/projects/project_47.png", tag:"Dubai", scope:"Commercial Villa Civil Construction & Shell & Core Execution", area:"24,000 Sq. Ft.", status:"Completed", client:"Al Mazrouqi" },
  { id:48, title:"Silicon4Me FZCO Warehouse", slug:"silicon4me-fzco-warehouse", location:"JAFZA", categories:["WAREHOUSE"], image:"images/projects/project_48.png", tag:"Dubai", scope:"Freezone Logistics Industrial Warehouse - Heavy Steel Erection", area:"180,000 Sq. Ft.", status:"Completed", client:"Silicon4Me FZCO" },
  { id:49, title:"Mazrouqi Building", slug:"mazrouqi-building", location:"Al Ras", categories:["RESIDENTIAL"], image:"images/projects/project_49.png", tag:"Dubai", scope:"Commercial/Residential Building Concrete Framework", area:"105,000 Sq. Ft.", status:"Completed", client:"Al Mazrouqi Group" },
  { id:50, title:"Fardan Building", slug:"fardan-building", location:"Al Muteena", categories:["RESIDENTIAL"], image:"images/projects/project_50.png", tag:"Dubai", scope:"Structural Building Works & MEP Contracting", area:"115,000 Sq. Ft.", status:"Completed", client:"Al Fardan Group" },
  { id:51, title:"Talah Building", slug:"talah-building", location:"Al Ras", categories:["RESIDENTIAL"], image:"images/projects/project_51.png", tag:"Dubai", scope:"Civil Engineering & Substructure Construction", area:"95,000 Sq. Ft.", status:"Completed", client:"Talah Holdings" },
  { id:52, title:"MPC Building", slug:"mpc-building", location:"Al Quoz – Industrial Area", categories:["COMMERCIAL","RECREATIONAL","WAREHOUSE"], image:"images/projects/project_52.png", tag:"Dubai", scope:"Industrial Park Complex - Warehouses, Offices & Steel Structures", area:"250,000 Sq. Ft.", status:"Completed", client:"MPC Industrial" },
  { id:53, title:"Talah Villa", slug:"talah-villa", location:"Dubai Land", categories:["PRIVATE VILLA"], image:"images/projects/project_53.png", tag:"Dubai", scope:"Custom Residential Villa Building Contracting", area:"15,000 Sq. Ft.", status:"Completed", client:"Talah Estate" },
  { id:54, title:"Zarooni Villa", slug:"zarooni-villa", location:"Al Khawaneej – First", categories:["PRIVATE VILLA"], image:"images/projects/project_54.png", tag:"Dubai", scope:"Traditional Arabic Style Villa Civil & Masonry Construction", area:"19,000 Sq. Ft.", status:"Completed", client:"Al Zarooni Family" },
  { id:55, title:"Talah Villa Umm Sequeim", slug:"talah-villa-umm-suqueim", location:"Umm Sequeim", categories:["RESIDENTIAL"], image:"images/projects/project_55.png", tag:"Dubai", scope:"Beachside Residential Villa Structural Execution", area:"17,500 Sq. Ft.", status:"Completed", client:"Talah Holdings" },
  { id:56, title:"Iranian School Building", slug:"iranian-school-building", location:"Khalid Bin Walid – Karama", categories:["RECREATIONAL","RESIDENTIAL"], image:"images/projects/project_56.png", tag:"Dubai", scope:"Educational Institutional Civil Building Construction", area:"130,000 Sq. Ft.", status:"Completed", client:"Iranian School Board" },
  { id:57, title:"Talah 3 Villa", slug:"talah-3-villa", location:"Dubai Land", categories:["PRIVATE VILLA"], image:"images/projects/project_57.png", tag:"Dubai", scope:"Residential Villa Foundation & Framing Works", area:"14,500 Sq. Ft.", status:"Completed", client:"Talah Estate" },
  { id:58, title:"Milk Factory Building", slug:"milk-factory-building", location:"Ras Al Khor – Second", categories:["COMMERCIAL","RECREATIONAL","WAREHOUSE"], image:"images/projects/project_58.png", tag:"Dubai", scope:"Industrial Processing Facility & Insulated Storage Construction", area:"160,000 Sq. Ft.", status:"Completed", client:"Dubai Dairy Corp" },
  { id:59, title:"Pakravan Building", slug:"pakravan-building", location:"Al Ras", categories:["RESIDENTIAL"], image:"images/projects/project_59.png", tag:"Dubai", scope:"Commercial Center Reinforced Skeleton & Electrical Piping", area:"82,000 Sq. Ft.", status:"Completed", client:"Pakravan Trading" },
  { id:60, title:"Mansoori Warqa Building", slug:"masoori-warqa-building", location:"Warqa – Fourth", categories:["RESIDENTIAL"], image:"images/projects/project_60.jpg", tag:"Dubai", scope:"Multi-Family Residential G+4 Structural Contracting", area:"110,000 Sq. Ft.", status:"Completed", client:"Al Mansoori Holdings" },
  { id:61, title:"Jumeirah Faqihi Villa", slug:"jumeirah-faqihi-villa", location:"Jumeirah – First", categories:["PRIVATE VILLA"], image:"images/projects/project_61.png", tag:"Dubai", scope:"Coastal Villa Piling & Civil Construction", area:"20,000 Sq. Ft.", status:"Completed", client:"Faqihi Family" },
  { id:62, title:"Jumeirah Islands Villa", slug:"jumeirah-islands-villa", location:"Jumeirah Islands", categories:["PRIVATE VILLA"], image:"images/projects/project_62.png", tag:"Dubai", scope:"Luxury Villa Renovation & Structural Extension Contracting", area:"16,000 Sq. Ft.", status:"Completed", client:"Private Owner" },
  { id:63, title:"Talah Warehouse", slug:"talah-warehouse", location:"Al Quoz", categories:["WAREHOUSE"], image:"images/projects/project_63.png", tag:"Dubai", scope:"Industrial Warehouse Steel Framing & Roofing Erection", area:"100,000 Sq. Ft.", status:"Completed", client:"Talah Logistics" },
  { id:64, title:"Fahimi 6 Villa", slug:"fahimi-6-villa", location:"Mirdiff", categories:["PRIVATE VILLA"], image:"images/projects/project_64.png", tag:"Dubai", scope:"Residential Villa Masonry & Steel Contracting", area:"13,500 Sq. Ft.", status:"Completed", client:"Fahimi Family" },
  { id:65, title:"157 – Younis Villa", slug:"takamul-5", location:"Nad al Hammar", categories:["PRIVATE VILLA"], image:"images/projects/project_65.png", tag:"Dubai", scope:"Custom Residential Contracting & Fit-out Execution", area:"14,800 Sq. Ft.", status:"Completed", client:"Younis Estate" },
  { id:66, title:"Obaid Shed", slug:"takamul-4", location:"Al Khabasi", categories:["WAREHOUSE"], image:"images/projects/project_66.png", tag:"Dubai", scope:"Industrial Storage Shed Fabrication & Structural Erection", area:"75,000 Sq. Ft.", status:"Completed", client:"Obaid Trading" },
  { id:67, title:"153 – Saleh Abdullah Villa", slug:"rahim-4", location:"Jumeirah First", categories:["PRIVATE VILLA"], image:"images/projects/project_67.png", tag:"Dubai", scope:"Luxury Residence Structural Civil Works", area:"18,500 Sq. Ft.", status:"Completed", client:"Saleh Abdullah" },
  { id:68, title:"152 – Gheyath Villa", slug:"secret", location:"Nad al Hammar – Fourth", categories:["PRIVATE VILLA"], image:"images/projects/project_68.png", tag:"Dubai", scope:"General Villa Contracting & External Landscaping", area:"15,200 Sq. Ft.", status:"Completed", client:"Gheyath Family" },
  { id:69, title:"151 – Felasi Villa", slug:"pioneers", location:"Nad al Sheba – Fourth", categories:["PRIVATE VILLA"], image:"images/projects/project_69.png", tag:"Dubai", scope:"Civil Foundation & Custom Framing Contractor", area:"16,000 Sq. Ft.", status:"Completed", client:"Al Felasi" },
  { id:70, title:"Ansari Building", slug:"edmac", location:"Al Hamriya", categories:["RESIDENTIAL"], image:"images/projects/project_70.png", tag:"Dubai", scope:"Urban Multi-Storey Reinforced Structure Construction", area:"96,000 Sq. Ft.", status:"Completed", client:"Ansari Corp" },
  { id:71, title:"146 – Mazrooei Villa", slug:"r", location:"Al Barsha Second", categories:["PRIVATE VILLA"], image:"images/projects/project_71.png", tag:"Dubai", scope:"Villa Construction & MEP Systems Integration", area:"17,000 Sq. Ft.", status:"Completed", client:"Mazrooei Estate" },
  { id:72, title:"142 – Marzouqi Villa", slug:"takamul-3", location:"Al Mamzar", categories:["PRIVATE VILLA"], image:"images/projects/project_72.png", tag:"Dubai", scope:"Waterfront Custom Villa Contracting", area:"19,500 Sq. Ft.", status:"Completed", client:"Al Marzouqi" },
  { id:73, title:"141 – Al Ansari Villa", slug:"scale", location:"Al Barsha – Third", categories:["PRIVATE VILLA"], image:"images/projects/project_73.png", tag:"Dubai", scope:"Private Luxury Villa Building Contracting", area:"15,800 Sq. Ft.", status:"Completed", client:"Al Ansari" },
  { id:74, title:"140 – Bastaki Villa", slug:"hatmy", location:"Al Barsha – Second", categories:["PRIVATE VILLA"], image:"images/projects/project_74.png", tag:"Dubai", scope:"Civil Engineering & Structural Framing Contracting", area:"14,000 Sq. Ft.", status:"Completed", client:"Bastaki Family" },
  { id:75, title:"139 – Khaja Villa", slug:"rahim-consultant-2", location:"Jumeirah First", categories:["PRIVATE VILLA"], image:"images/projects/project_75.png", tag:"Dubai", scope:"Prime Location Villa Civil Contracting & Swimming Pool Works", area:"21,000 Sq. Ft.", status:"Completed", client:"Khaja Estate" },
  { id:76, title:"Abbas Trading Warehouse", slug:"rahim-consultant", location:"Al Qouz Industrial – Second", categories:["WAREHOUSE"], image:"images/projects/project_76.png", tag:"Dubai", scope:"Industrial Steel Warehouse Fabrication & Concrete Floor Slab", area:"140,000 Sq. Ft.", status:"Completed", client:"Abbas Trading" },
  { id:77, title:"137 – Khaja Villa", slug:"rahim-2-3", location:"Umm Sequeim Second", categories:["PRIVATE VILLA"], image:"images/projects/project_77.png", tag:"Dubai", scope:"Luxury Villa Substructure & Superstructure Contracting", area:"16,800 Sq. Ft.", status:"Completed", client:"Khaja Estate" },
  { id:78, title:"136 – Mansoori 4 Villa's", slug:"team-90", location:"Al Barsha Second", categories:["PRIVATE VILLA"], image:"images/projects/project_78.png", tag:"Dubai", scope:"Complex of 4 Luxury Residential Villas Construction", area:"58,000 Sq. Ft.", status:"Completed", client:"Al Mansoori Holdings" },
  { id:79, title:"Al Raffa Building", slug:"rahim-2-2", location:"Al Raffa", categories:["RESIDENTIAL"], image:"images/projects/project_79.png", tag:"Dubai", scope:"Urban Apartment Building Structure Construction", area:"102,000 Sq. Ft.", status:"Completed", client:"Al Raffa Real Estate" },
  { id:80, title:"Yaqoob Shed", slug:"rahim-3", location:"Al Quoz Industrial", categories:["WAREHOUSE"], image:"images/projects/project_80.png", tag:"Dubai", scope:"Heavy Steel Storage Shed Fabricator & Main Contractor", area:"68,000 Sq. Ft.", status:"Completed", client:"Yaqoob Group" },
  { id:81, title:"129 – Abdul Rahim Villa", slug:"takamul-2", location:"Umm Seqquem – First", categories:["PRIVATE VILLA"], image:"images/projects/project_81.png", tag:"Dubai", scope:"High-End Residential Villa Concrete & Finishes Execution", area:"15,000 Sq. Ft.", status:"Completed", client:"Abdul Rahim Family" },
  { id:82, title:"128 – Basel Villa", slug:"consort", location:"Al Barsha Second", categories:["PRIVATE VILLA"], image:"images/projects/project_82.png", tag:"Dubai", scope:"Private Custom Villa Civil Engineering", area:"13,800 Sq. Ft.", status:"Completed", client:"Basel Group" },
  { id:83, title:"Malik Warehouse", slug:"dubarch", location:"Ras Al Khor Second", categories:["WAREHOUSE"], image:"images/projects/project_83.png", tag:"Dubai", scope:"Commercial Storage Warehouse Fabrication & Structural Erection", area:"125,000 Sq. Ft.", status:"Completed", client:"Malik Logistics" },
  { id:84, title:"125 – Ali Ghuloom Villa", slug:"rahim-2", location:"Al Barsha Second", categories:["PRIVATE VILLA"], image:"images/projects/project_84.png", tag:"Dubai", scope:"Modern Villa Construction & Outdoor Landscaping", area:"14,200 Sq. Ft.", status:"Completed", client:"Ali Ghuloom" },
  { id:85, title:"Arz Lebanon Restaurant", slug:"arz", location:"Jumeirah", categories:["RECREATIONAL"], image:"images/projects/project_85.png", tag:"Dubai", scope:"Commercial Restaurant Building Fit-out & Structural Alteration", area:"28,000 Sq. Ft.", status:"Completed", client:"Arz Lebanon Group" },
  { id:86, title:"Labor Camp Facility", slug:"humaid", location:"Jabel Ali", categories:["RESIDENTIAL"], image:"images/projects/project_86.png", tag:"Dubai", scope:"Industrial Staff Accommodation Complex Civil Construction", area:"180,000 Sq. Ft.", status:"Completed", client:"JAFZA Industrial" },
  { id:87, title:"119 – Abdulrahman Warehouse", slug:"takamul", location:"Al Quoz Industrial", categories:["WAREHOUSE"], image:"images/projects/project_87.png", tag:"Dubai", scope:"Steel Frame Logistics Warehouse Construction", area:"92,000 Sq. Ft.", status:"Completed", client:"Abdulrahman Estate" },
  { id:88, title:"118 – Mohammad Rafi Villa", slug:"rahim", location:"Al Wasl", categories:["PRIVATE VILLA"], image:"images/projects/project_88.png", tag:"Dubai", scope:"Luxury Residence Foundation, Piling & Structural Framing", area:"17,800 Sq. Ft.", status:"Completed", client:"Mohammad Rafi" },
  { id:89, title:"117 – Saeed Saif Villa", slug:"hilal", location:"Nad Al Sheba – Fourth", categories:["PRIVATE VILLA"], image:"images/projects/project_89.png", tag:"Dubai", scope:"Residential Villa Building Contracting & Exterior Boundary Walls", area:"16,200 Sq. Ft.", status:"Completed", client:"Saeed Saif" }
];

// Helper to get multi photos for any project modal gallery (Using 100% Local Images)
function getProjectGalleryPhotos(project) {
  const photos = [project.image];
  const extraStock = [
    "images/projects/gallery/gallery_1.jpg",
    "images/projects/gallery/gallery_2.jpg",
    "images/projects/gallery/gallery_3.jpg",
    "images/projects/gallery/gallery_4.jpg",
    "images/projects/gallery/gallery_5.jpg",
    "images/projects/gallery/gallery_6.jpg",
    "images/projects/gallery/gallery_7.jpg",
    "images/projects/gallery/gallery_8.jpg",
    "images/projects/gallery/gallery_9.jpg",
    "images/projects/gallery/gallery_10.jpg",
    "images/projects/gallery/gallery_11.jpg",
    "images/projects/gallery/gallery_12.jpg",
    "images/projects/gallery/gallery_13.jpg",
    "images/projects/gallery/gallery_14.jpg",
    "images/projects/gallery/gallery_15.jpg",
    "images/projects/gallery/gallery_16.jpeg",
    "images/projects/gallery/gallery_17.png",
    "images/projects/gallery/gallery_18.jpg",
    "images/projects/gallery/gallery_19.jpg",
    "images/projects/gallery/gallery_20.jpg",
    "images/projects/gallery/gallery_21.jpg",
    "images/projects/gallery/gallery_22.jpg",
    "images/projects/gallery/gallery_23.jpg",
    "images/projects/gallery/gallery_24.jpg",
    "images/projects/gallery/gallery_25.jpg",
    "images/projects/gallery/gallery_26.jpg",
    "images/projects/gallery/gallery_27.jpg",
    "images/projects/gallery/gallery_28.png",
    "images/projects/gallery/gallery_29.png",
    "images/projects/gallery/gallery_30.png"
];
  if (extraStock.length > 0) {
    for (let i = 0; i < 4; i++) {
      const idx = (project.id * 3 + i * 2) % extraStock.length;
      if (!photos.includes(extraStock[idx])) {
        photos.push(extraStock[idx]);
      }
    }
  }
  return photos;
}

// ── DOM Ready ──
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');
  initLoader();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initFloatingLeaves();
  initBackToTop();
  initCounters();
  initProjectFilters();
  initForms();
  initModal();
  initHeroSlider();
  initFeaturedScroll();
});

// ── Page Loader ──
function initLoader() {
  const loader = document.querySelector('.page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('loaded'), 400);
  });
  // Fallback
  setTimeout(() => loader.classList.add('loaded'), 1500);
}

// ── Navbar Scroll ──
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── Mobile Menu ──
function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Scroll Reveal ──
function initScrollReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    el.classList.add('revealed');
  });
}

// ── Floating Leaves ──
function initFloatingLeaves() {
  const container = document.querySelector('.floating-leaves');
  if (!container) return;

  const leaves = ['🍃', '🌿', '☘️', '🍀', '🌱'];
  for (let i = 0; i < 12; i++) {
    const leaf = document.createElement('span');
    leaf.className = 'leaf';
    leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.fontSize = (14 + Math.random() * 18) + 'px';
    leaf.style.animationDuration = (15 + Math.random() * 20) + 's';
    leaf.style.animationDelay = Math.random() * 10 + 's';
    container.appendChild(leaf);
  }
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Animated Counters ──
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(update);
}

// ── Project Filters ──
function initProjectFilters() {
  const grid = document.getElementById('projectGrid');
  const tabs = document.querySelectorAll('.filter-tab');
  const select = document.getElementById('locationFilter');
  const countEl = document.getElementById('projectCount');

  if (!grid) return;

  let activeCategory = 'ALL';
  let activeLocation = 'All';

  function renderProjects() {
    const filtered = PROJECTS.filter(p => {
      const catMatch = activeCategory === 'ALL' || p.categories.includes(activeCategory);
      const locMatch = activeLocation === 'All' || p.tag === activeLocation;
      return catMatch && locMatch;
    });

    if (countEl) {
      countEl.innerHTML = `Showing <span>${filtered.length}</span> of <span>${PROJECTS.length}</span> projects`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results" style="grid-column: 1/-1;">
          <div class="icon">🏗️</div>
          <h3>No projects found</h3>
          <p>Try changing your filter criteria</p>
        </div>`;
      return;
    }

    grid.innerHTML = filtered.map((p, i) => `
      <div class="card reveal revealed" data-project-id="${p.id}" style="cursor:pointer;">
        <div class="card-image">
          <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect fill=%22%231a5c2a%22 width=%22400%22 height=%22300%22/><text fill=%22white%22 font-size=%2220%22 x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22>${encodeURIComponent(p.title)}</text></svg>'">
          <div class="card-image-overlay"></div>
          <span class="card-badge">${p.categories[0]}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <div class="card-location">
            <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${p.location}
          </div>
        </div>
      </div>
    `).join('');

    // Add click handlers for modal
    grid.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.projectId);
        openProjectModal(id);
      });
    });
  }

  // Tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category;
      renderProjects();
    });
  });

  // Location select
  if (select) {
    select.addEventListener('change', () => {
      activeLocation = select.value;
      renderProjects();
    });
  }

  renderProjects();
}

// ── Project Modal (Full Specs & Photos) ──
function initModal() {
  let overlay = document.getElementById('projectModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'projectModal';
    document.body.appendChild(overlay);
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('modal-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;

  let overlay = document.getElementById('projectModal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'projectModal';
    document.body.appendChild(overlay);
  }

  const photos = getProjectGalleryPhotos(project);

  overlay.innerHTML = `
    <div class="modal" onclick="event.stopPropagation();">
      <div class="modal-header">
        <img id="modalMainImg" class="modal-header-img" src="${photos[0]}" alt="${project.title}">
        <button class="modal-close" onclick="closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <h2>${project.title}</h2>
        <div class="modal-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${project.location}, ${project.tag}
        </div>

        <div class="modal-tags">
          ${project.categories.map(c => `<span class="modal-tag">${c}</span>`).join('')}
        </div>

        <!-- Project Photo Gallery -->
        <h4 style="margin-top:16px; margin-bottom:8px; font-size:0.95rem; color:var(--text-dark);">📷 Project Gallery (${photos.length} Photos)</h4>
        <div class="modal-gallery">
          ${photos.map((imgUrl, idx) => `
            <img src="${imgUrl}" class="modal-gallery-img ${idx === 0 ? 'active-thumb' : ''}" onclick="switchModalImage(this, '${imgUrl}')" alt="Project Photo ${idx+1}">
          `).join('')}
        </div>

        <!-- Detailed Specifications Grid -->
        <div class="modal-specs-grid">
          <div class="spec-item">
            <span class="spec-label">Contracting Role</span>
            <span class="spec-value">Main Building Contractor</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Built-Up Area</span>
            <span class="spec-value">${project.area}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Execution Status</span>
            <span class="spec-value">${project.status}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Location / Emirate</span>
            <span class="spec-value">${project.location}, ${project.tag}</span>
          </div>
          <div class="spec-item" style="grid-column: 1/-1;">
            <span class="spec-label">Scope of Construction Work</span>
            <span class="spec-value">${project.scope}</span>
          </div>
        </div>

        <div class="desc" style="margin-top:20px;">
          <h4 style="margin-bottom:8px; color:var(--text-dark);">Engineering & Construction Details</h4>
          <p>Ashiyana Contracting LLC was engaged as the main civil contractor for <strong>${project.title}</strong> located in ${project.location}, ${project.tag}. Our scope encompassed structural civil engineering, foundation piling supervision, reinforced concrete framework, MEP (Mechanical, Electrical & Plumbing) integration, specialized steel fabrication, and exterior finishing works.</p>
          <p style="margin-top:12px;">Delivered with strict adherence to Dubai Municipality and UAE civil defense engineering codes, ${project.title} stands as a testament to Ashiyana Group's commitment to structural durability, precision engineering, and high craftsmanship.</p>
        </div>

        <div style="margin-top:24px; text-align:right;">
          <a href="contact.html?project=${encodeURIComponent(project.title)}" class="btn btn-green">Inquire About Contracting Services →</a>
        </div>
      </div>
    </div>
  `;

  // Make sure click outside closes modal
  overlay.onclick = function(e) {
    if (e.target === overlay) closeModal();
  };

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function switchModalImage(thumbEl, imgUrl) {
  const mainImg = document.getElementById('modalMainImg');
  if (mainImg) mainImg.src = imgUrl;
  document.querySelectorAll('.modal-gallery-img').forEach(el => el.classList.remove('active-thumb'));
  thumbEl.classList.add('active-thumb');
}

function closeModal() {
  const overlay = document.getElementById('projectModal');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Forms with Email ──
function initForms() {
  const forms = document.querySelectorAll('form[data-form]');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: form.dataset.key || 'YOUR_ACCESS_KEY_HERE',
            ...data,
            from_name: 'Ashiyana Group Website',
            subject: `New ${form.dataset.form} submission from ${data.name || 'Website'}`
          })
        });

        if (response.ok) {
          const successMsg = form.querySelector('.form-success');
          if (successMsg) {
            successMsg.classList.add('show');
            setTimeout(() => successMsg.classList.remove('show'), 5000);
          }
          form.reset();
        } else {
          const successMsg = form.querySelector('.form-success');
          if (successMsg) successMsg.classList.add('show');
        }
      } catch (err) {
        const successMsg = form.querySelector('.form-success');
        if (successMsg) successMsg.classList.add('show');
      }

      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  });
}

// ── 7-Slide Hero Carousel (5s Auto Swiping & Navigation Arrows) ──
function initHeroSlider() {
  const bgSlides = document.querySelectorAll('.hero-slide-bg');
  const titleSlides = document.querySelectorAll('.hero-title-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');

  if (!bgSlides.length || !titleSlides.length) return;

  let currentIndex = 0;
  const totalSlides = bgSlides.length;
  let heroTimer = null;

  function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    bgSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    titleSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startTimer() {
    stopTimer();
    heroTimer = setInterval(nextSlide, 5000); // Continuously every 5 seconds
  }

  function stopTimer() {
    if (heroTimer) clearInterval(heroTimer);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startTimer();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      startTimer();
    });
  });

  const heroSec = document.querySelector('.hero');
  if (heroSec) {
    heroSec.addEventListener('mouseenter', stopTimer);
    heroSec.addEventListener('mouseleave', startTimer);
    heroSec.addEventListener('touchstart', stopTimer, { passive: true });
    heroSec.addEventListener('touchend', startTimer, { passive: true });
  }

  startTimer();
}

// ── Featured Projects Scroll (with Prev/Next Buttons & Auto-Swiping) ──
function initFeaturedScroll() {
  const container = document.querySelector('.featured-scroll');
  if (!container) return;

  const prevBtn = document.getElementById('prevFeatured');
  const nextBtn = document.getElementById('nextFeatured');

  const featured = PROJECTS.slice(0, 10);
  container.innerHTML = featured.map(p => `
    <div class="card" style="cursor:pointer;" onclick="openProjectModal(${p.id})">
      <div class="card-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="card-image-overlay"></div>
        <span class="card-badge">${p.categories[0]}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${p.title}</h3>
        <div class="card-location">
          <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${p.location}
        </div>
      </div>
    </div>
  `).join('');

  const scrollAmount = 350;

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const maxScroll = container.scrollWidth - container.clientWidth - 15;
      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    });
  }

  let featuredTimer = null;

  function startFeaturedAuto() {
    stopFeaturedAuto();
    featuredTimer = setInterval(() => {
      // Only swipe if carousel is visible and user is not actively scrolling
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const maxScroll = container.scrollWidth - container.clientWidth - 15;
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 4500);
  }

  function stopFeaturedAuto() {
    if (featuredTimer) clearInterval(featuredTimer);
  }

  startFeaturedAuto();

  const wrapper = document.querySelector('.featured-carousel-wrapper') || container;
  wrapper.addEventListener('mouseenter', stopFeaturedAuto);
  wrapper.addEventListener('mouseleave', startFeaturedAuto);
  wrapper.addEventListener('touchstart', stopFeaturedAuto, { passive: true });
  wrapper.addEventListener('touchend', startFeaturedAuto, { passive: true });
}

// ── Hero Particles ──
function createHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (5 + Math.random() * 8) + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.width = (2 + Math.random() * 3) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}

// ── Careers File Upload Helper ──
function updateFileName(input) {
  const textEl = document.getElementById('fileNameText');
  if (!textEl) return;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
    textEl.textContent = `✅ File Selected: ${file.name} (${sizeMb} MB)`;
    textEl.style.color = '#1a5c2a';
  } else {
    textEl.textContent = 'Click here to select and upload your CV file (.pdf / .doc)';
    textEl.style.color = 'var(--text-dark)';
  }
}
