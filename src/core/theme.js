const colorNames = {
    white: "#FFFFFF",
    alabaster: "#FBFBFB",
    mercury: "#E5E5E5",
    iron: "#D1D5DA",
    iron10: "#D1D5DA1A",
    iron30: "#D1D5DA4D",
    anakiwa: "#8CC2FF",
    violet2: "#090A3305",
    violet3: "#090A3308",
    parsley: "#14462033",
    dodgerBlue: "#2188FF",
    scienceBlue: "#0366D6",
    scienceBlue20: "#0366D633",
    scienceBlue50: "#0366D680",
    shipCove: "#6D93BE",
    slateGray: "#6E7E91",
    doveGray: "#6E6E6E",
    mineShaft: "#252525",
    mineShaftLighter: "#363636B8",
};

const common = {
    breakpoints: {
        laptop: 1156,
        tablet: 768,
        phone: 426,
    },
    fontWeights: {
        semiBold: 600,
        bold: 700,
        heavy: 900,
    },
};

export const lightTheme = {
    ...common,
    colors: {
        blue: colorNames.scienceBlue,
        background: colorNames.alabaster,
        text: colorNames.slateGray,
        headerText: colorNames.mineShaft,
        bottomBorder: colorNames.scienceBlue20,
        toggleBackground: colorNames.mercury,
        circle: colorNames.iron,
        tile: {
            background: colorNames.white,
            border: colorNames.iron30,
            hover: colorNames.scienceBlue20,
            shadow: colorNames.violet3,
            shadow2: colorNames.violet2,
        },
        button: {
            text: colorNames.white,
            shadow: colorNames.anakiwa,
            active: colorNames.parsley,
        },
    },
};

export const darkTheme = {
    ...common,
    colors: {
        blue: colorNames.dodgerBlue,
        background: colorNames.mineShaft,
        text: colorNames.white,
        headerText: colorNames.white,
        bottomBorder: colorNames.iron30,
        toggleBackground: colorNames.doveGray,
        circle: colorNames.doveGray,
        tile: {
            background: colorNames.mineShaftLighter,
            border: colorNames.iron10,
            hover: colorNames.scienceBlue50,
            shadow: colorNames.violet3,
            shadow2: colorNames.violet2,
        },
        button: {
            text: colorNames.white,
            shadow: colorNames.shipCove,
            active: colorNames.parsley,
        },
    },
};