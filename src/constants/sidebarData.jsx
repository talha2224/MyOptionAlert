import { FaBuilding,FaRegUser } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoIosSettings, IoMdCard, IoMdDocument, IoMdSettings } from "react-icons/io";
import { MdDashboard, MdLaptopChromebook, MdOutlineKey, MdOutlineSecurity } from 'react-icons/md';
import { IoKeySharp } from 'react-icons/io5';
import { AiOutlineTransaction } from "react-icons/ai";
import { RiHome5Fill } from "react-icons/ri";
import { GoAlertFill } from "react-icons/go";
import { BsFillSendArrowDownFill } from "react-icons/bs";
import { RiLuggageDepositFill } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { CgDollar } from "react-icons/cg";
import { RiFilePaperLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Scanner",
        icon: <MdDashboard />
    },
    {
        id: 7,
        link: "saved",
        name: "Saved Scan",
        icon: <MdLaptopChromebook   />
    },
    {
        id: 4,
        link: "thinkScript",
        name: "ThinkScript Manager",
        icon: <RiFilePaperLine />
    },
    {
        id: 3,
        link: "subscription",
        name: "Subscription & Billing",
        icon: <HiOutlineNewspaper  />
    },
    {
        id: 1,
        link: "alert",
        name: "Alert & Notifications",
        icon: <GoAlertFill/>
    },
    {
        id: 35,
        link: "settings",
        name: "Settings",
        icon: <IoIosSettings  />
    }
];

export const adminNav = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <MdDashboard />
    },
    {
        id: 7,
        link: "user",
        name: "User Managements",
        icon: <LuUser />
    },
    {
        id: 4,
        link: "thinkScript",
        name: "ThinkScript Manager",
        icon: <RiFilePaperLine />
    },
    {
        id: 3,
        link: "subscription",
        name: "Subscription & Billing",
        icon: <HiOutlineNewspaper  />
    },
]

export const companyNavData = [
    {
        id: 1,
        link: "home",
        name: "Home",
        icon: <RiHome5Fill/>
    },
    {
        id: 7,
        link: "api",
        name: "Api",
        icon: <MdOutlineKey/>
    },
    {
        id: 4,
        link: "transaction",
        name: "Transaction",
        icon: <GrTransaction/>
    },
    {
        id: 3,
        link: "documentation",
        name: "Documentation",
        icon: <IoMdDocument/>
    },
    {
        id: 35,
        link: "profile",
        name: "Profile",
        icon: <FaRegUser/>
    }
];