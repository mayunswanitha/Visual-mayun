const electron = require("electron");

const {
    app,
    BrowserWindow,
    Menu
} = electron;

let utsWindow;
let luasjajargenjangWindow;
let kelilingjajargenjangWindow;
let luaskubusWindow;
let luastabungWindow;
let luasprismasegitigaWindow;
let luaskerucutWindow;

app.on("ready", () => {
    utsWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Hitung Luas Bangun"
    });

    utsWindow.loadURL(`file://${__dirname}/today.html`);
    utsWindow.on("closed", () => {

        app.quit();
        utsWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const LuasJajarGenjangWindowCreator = () => {
    luasjajargenjangWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Jajar Genjang"
    });

    luasjajargenjangWindow.setMenu(null);
    luasjajargenjangWindow.loadURL(`file://${__dirname}/ljg.html`);
    luasjajargenjangWindow.on("closed", () => (luasjajargenjangWindow = null));
};

const KelilingJajarGenjangWindowCreator = () => {
    kelilingjajargenjangWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Keliling Jajar Genjang"
    });

    kelilingjajargenjangWindow.setMenu(null);
    kelilingjajargenjangWindow.loadURL(`file://${__dirname}/kjg.html`);
    kelilingjajargenjangWindow.on("closed", () => (kelilingjajargenjangWindow = null));
};

const LuasKubusWindowCreator = () => {
    luaskubusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kubus"
    });

    luaskubusWindow.setMenu(null);
    luaskubusWindow.loadURL(`file://${__dirname}/lkubus.html`);
    luaskubusWindow.on("closed", () => (luaskubusWindow = null));
};

const LuasTabungWindowCreator = () => {
    luastabungWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Tabung"
    });
    luastabungWindow.setMenu(null);
    luastabungWindow.loadURL(`file://${__dirname}/ltabung.html`);
    luastabungWindow.on("closed", () => (luastabungWindow = null));
};

const LuasPrismaSegitigaWindowCreator = () => {
    luasprismasegitigaWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Prisma Segitiga"
    });
    luasprismasegitigaWindow.setMenu(null);
    luasprismasegitigaWindow.loadURL(`file://${__dirname}/lps.html`);
    luasprismasegitigaWindow.on("closed", () => (luasprismasegitigaWindow = null));
};

const LuasKerucutWindowCreator = () => {
    luaskerucutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kerucut"
    });
    luaskerucutWindow.setMenu(null);
    luaskerucutWindow.loadURL(`file://${__dirname}/lkerucut.html`);
    luaskerucutWindow.on("closed", () => (luaskerucutWindow = null));
};

const menuTemplate = [{
        label: "Luas Jajar Genjang",
        click() {
            LuasJajarGenjangWindowCreator();
        }
    },
    {
        label: "Keliling Jajar Genjang",
        click() {
            KelilingJajarGenjangWindowCreator();
        }
    },
    {
        label: "Luas Kubus",
        click() {
            LuasKubusWindowCreator();
        }
    },
    {
        label: "Luas Tabung",
        click() {
            LuasTabungWindowCreator();
        }
    },
    {
        label: "Luas Prisma Segitiga",
        click() {
            LuasPrismaSegitigaWindowCreator();
        }
    },
    {
        label: "Luas Kerucut",
        click() {
            LuasKerucutWindowCreator();
        }
    }
]