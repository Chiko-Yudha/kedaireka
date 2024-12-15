
export const menuRows = [
    { 
        label: "PLTS", description: "sistem pembangkit listrik tenaga surya (PLTS)", url: "/plts" ,
        childs: [
            { label: "PV", description: "Solar Panel simulation practical", url: "/plts/pv" },
            { label: "On Grid", description: "sistem pembangkit listrik tenaga surya (PLTS) yang terhubung ke jaringan listrik umum", url: "/plts/ongrid" },
            { label: "Off Grid", description: "sistem pembangkit listrik tenaga surya (PLTS) yang tidak terhubung ke jaringan listrik umum", url: "/plts/offgrid" }        
        ]
    },
    { 
        label: "PLTB", description: "sistem pembangkit listrik tenaga Angin", url: "/pltb" 
    },
    { 
        label: "PLTMH", description: "sistem pembangkit listrik tenaga MICRO HYDRO", url: "/pltmh" 
    }
] 