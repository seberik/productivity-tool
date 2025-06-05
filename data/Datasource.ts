// To parse this data:
//
//   import { Convert, Datasource } from "./file";
//
//   const datasource = Convert.toDatasource(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Datasource {
    devices: Device[];
    version: string;
}

export interface Device {
    guids:            string[];
    icon:             Icon;
    id:               string;
    images:           Images;
    line:             Line;
    product:          Product;
    shortnames:       string[];
    sku:              string;
    sysid?:           string;
    sysids:           string[];
    triplets:         Triplet[];
    uisp?:            Uisp;
    videos:           Videos;
    btle?:            Btle;
    jrf?:             string[];
    jpa?:             string[];
    compliance?:      Compliance;
    deviceType?:      DeviceType;
    minAdoptVersion?: MinAdoptVersion;
    unifi?:           Unifi;
    isARSupported?:   boolean;
    fcc?:             string;
    ic?:              string;
}

export interface Btle {
    factoryDefault: string;
    userConfigured: string;
}

export interface Compliance {
    fcc?:         string;
    ic?:          string;
    icEmi:        ICEmi;
    modelName:    string;
    rcm?:         boolean;
    rfCmFcc?:     number;
    rfCmIc?:      number;
    text:         Text;
    anatel?:      string;
    ncc?:         string;
    productName?: string;
    cn?:          string;
    jrf?:         string[];
    wifi?:        Wifi;
    indoorOnly?:  boolean;
    kc?:          string;
    jnfc?:        string;
    jpa?:         string[];
}

export enum ICEmi {
    CANIces003BNMB003B = "CAN ices-003(B)/NMB-003(B)",
    CanICES003ANMB003A = "Can ICES-003(A)/NMB-003(A)",
    CanIces003ANmb003A = "CAN ICES-003(A)/NMB-003(A)",
    CanIces003BNmb003B = "CAN ICES-003(B)/NMB-003(B)",
}

export interface Text {
    CA:  CA[];
    US?: Ua[];
    BR?: string[];
    UA?: Ua[];
}

export enum CA {
    IC = "IC",
    RF = "RF",
    Sar = "SAR",
    WWW = "www",
    Wifi5 = "WIFI_5",
    Wifi5_DetAnt = "WIFI_5_DET_ANT",
    Wifi6 = "WIFI_6",
}

export enum Ua {
    FccA = "FCC_A",
    FccB = "FCC_B",
    RF = "RF",
    Sar = "SAR",
    Wifi5 = "WIFI_5",
    Wifi6 = "WIFI_6",
}

export enum Wifi {
    The5E = "5e",
    The6E = "6e",
}

export enum DeviceType {
    Camera = "camera",
    Chime = "chime",
    Console = "console",
    Doorlock = "doorlock",
    Light = "light",
    NetworkServerHost = "network-server-host",
    Sensor = "sensor",
    Viewer = "viewer",
}

export interface Icon {
    id:          string;
    resolutions: Array<number[]>;
}

export interface Images {
    default:                      string;
    nopadding:                    string;
    topology:                     string;
    "mobile-connection"?:         string;
    "mobile-internet-connected"?: string;
    "mobile-no-internet"?:        string;
    "left-nopadding"?:            string;
    "right-nopadding"?:           string;
}

export interface Line {
    id:   ID;
    name: Name;
}

export enum ID {
    Airfiber = "airfiber",
    Airmax = "airmax",
    Amplifi = "amplifi",
    Apollo = "apollo",
    Edgemax = "edgemax",
    Ltu = "ltu",
    Mfi = "mfi",
    Sunmax = "sunmax",
    Ufiber = "ufiber",
    Uisp = "uisp",
    UnifiAccess = "unifi-access",
    UnifiConnect = "unifi-connect",
    UnifiDrive = "unifi-drive",
    UnifiLED = "unifi-led",
    UnifiLTE = "unifi-lte",
    UnifiMobility = "unifi-mobility",
    UnifiNetwork = "unifi-network",
    UnifiProtect = "unifi-protect",
    UnifiTalk = "unifi-talk",
    Unknown = "unknown",
    Wave = "wave",
    Wifiman = "wifiman",
}

export enum Name {
    AirFiber = "AirFiber",
    AirMAX = "airMAX",
    AmpliFi = "AmpliFi",
    Apollo = "Apollo",
    EdgeMAX = "EdgeMAX",
    Ltu = "LTU",
    MFi = "mFi",
    SunMAX = "SunMAX",
    UFiber = "UFiber",
    Uisp = "UISP",
    UniFi = "UniFi",
    UniFiAccess = "UniFi Access",
    UniFiConnect = "UniFi Connect",
    UniFiDrive = "UniFi Drive",
    UniFiLED = "UniFi LED",
    UniFiLTE = "UniFi LTE",
    UniFiMobility = "UniFi Mobility",
    UniFiProtect = "UniFi Protect",
    UniFiTalk = "UniFi Talk",
    Unknown = "Unknown",
    Wave = "Wave",
    WiFiMan = "WiFiMan",
}

export interface MinAdoptVersion {
    net?:     string;
    protect?: string;
}

export interface Product {
    abbrev: string;
    name:   string;
}

export interface Triplet {
    k1?: string;
    k2?: string;
    k3?: string;
}

export interface Uisp {
    bleServices: { [key: string]: BleServiceValue };
    firmware:    Firmware;
    line:        string;
    nameLegacy:  string[];
}

export interface BleServiceValue {
    mode: Mode;
}

export enum Mode {
    Default = "default",
    DefaultLegacy = "default_legacy",
    Factory = "factory",
    FactoryLegacy = "factory_legacy",
}

export interface Firmware {
    board:    string[];
    platform: null | string;
}

export interface Unifi {
    adoptability?: Adoptability;
    network?:      Network;
    protect?:      Protect;
}

export enum Adoptability {
    Adoptable = "adoptable",
    Standalone = "standalone",
}

export interface Network {
    bleServices?:                       BleServiceElement[];
    deviceCapabilities:                 string[];
    model:                              string;
    radios:                             Radios;
    type:                               string;
    chipset?:                           string;
    ethernetMaxSpeedMegabitsPerSecond?: number;
    features?:                          NetworkFeatures;
    minimumFirmwareRequired?:           null | string;
    numberOfPorts?:                     number;
    systemIdHexadecimal?:               string;
    diagram?:                           string[];
    ports?:                             NetworkGroups;
    details?:                           Details;
    knownUnsupportedFeatures?:          KnownUnsupportedFeature[];
    linkNegotiation?:                   LinkNegotiation;
    networkGroups?:                     NetworkGroups;
    shadowMode?:                        ShadowMode;
    subtypes?:                          Subtype[];
    hybrid?:                            string;
    switchPorts?:                       number[];
    optionalWanPortIndexes?:            number[];
    power?:                             Power;
    temperatureSensors?:                TemperatureSensor[];
    primaryPortGroupCount?:             number;
    outlets?:                           Outlets;
    outletsDiagram?:                    string[];
    primaryOutletGroupCount?:           number;
    rps?:                               Rps;
    optionalWanPortNumbers?:            number[];
}

export interface BleServiceElement {
    configured: string;
    default:    string;
    features?:  BleServiceFeatures;
}

export interface BleServiceFeatures {
    ucore: boolean;
}

export interface Details {
    ipsThroughput:    string;
    legacyPortRemap?: boolean;
}

export interface NetworkFeatures {
    atfDisabled?:        boolean;
    ax?:                 boolean;
    bandsteer?:          boolean;
    be?:                 boolean;
    gen?:                number;
    outdoorModeSupport?: boolean;
    poe?:                boolean;
    zh?:                 boolean;
    ac?:                 boolean;
    brcm?:               boolean;
    airTime?:            boolean;
    airView?:            boolean;
    dfs?:                boolean;
    fan?:                Fan;
    legacyPortRemap?:    boolean;
    sfpPlusSupported?:   boolean;
    uplinkPort?:         number;
}

export enum Fan {
    Alwayson = "alwayson",
    Simple = "simple",
}

export enum KnownUnsupportedFeature {
    SwitchCapDot1X = "SWITCH_CAP_DOT1X",
    SwitchCapEgressRateLimit = "SWITCH_CAP_EGRESS_RATE_LIMIT",
    SwitchCapLldpMed = "SWITCH_CAP_LLDP_MED",
    SwitchCapPortIsolation = "SWITCH_CAP_PORT_ISOLATION",
    SwitchCapStormControl = "SWITCH_CAP_STORM_CONTROL",
    SwitchCapStp = "SWITCH_CAP_STP",
}

export interface LinkNegotiation {
    eth0?:  Eth0Class;
    eth1?:  Eth0Class;
    eth2?:  Eth2Class;
    eth3?:  Eth2Class;
    eth4?:  Eth2Class;
    eth5?:  Eth0Class;
    eth6?:  Eth2Class;
    eth10?: Eth0Class;
    eth7?:  Eth2Class;
    eth8?:  Eth2Class;
    eth9?:  Eth0Class;
    eth15?: Eth0Class;
    eth16?: Eth0Class;
    eth18?: Eth0Class;
    eth19?: Eth0Class;
}

export interface Eth0Class {
    portIdx:         number;
    supportedValues: SupportedValue[];
}

export enum SupportedValue {
    Autoneg = "autoneg",
    The10000Fdx = "10000 FDX",
    The1000Fdx = "1000 FDX",
    The100Fdx = "100 FDX",
    The100Hdx = "100 HDX",
    The10Fdx = "10 FDX",
    The10Hdx = "10 HDX",
    The25000Fdx = "25000 FDX",
    The2500Fdx = "2500 FDX",
    The5000Fdx = "5000 FDX",
}

export interface Eth2Class {
    portIdx?:         number;
    supportedValues?: SupportedValue[];
    bindWith?:        string;
}

export interface NetworkGroups {
    eth0?:     string;
    eth1?:     string;
    eth2?:     string;
    eth3?:     string;
    eth4?:     string;
    eth5?:     string;
    eth6?:     string;
    eth10?:    string;
    eth7?:     string;
    eth8?:     string;
    eth9?:     string;
    eth11?:    string;
    eth12?:    string;
    eth13?:    string;
    eth14?:    string;
    eth15?:    string;
    eth16?:    string;
    eth17?:    string;
    eth18?:    string;
    eth19?:    string;
    sfp28?:    number[] | string;
    standard?: number[] | number | string;
    qsfp28?:   string;
    plus?:     number[] | number | string;
    sfp?:      number[];
    wan?:      number[];
}

export interface Outlets {
    lan?:     number[];
    meta?:    { [key: string]: Meta };
    standard: number[] | number | string;
    usb?:     number[] | string;
    wan?:     number[];
}

export interface Meta {
    center?:       boolean;
    rotation?:     Rotation;
    marginLeft?:   string;
    nonClickable?: boolean;
    portIdx?:      number;
}

export enum Rotation {
    The90Deg = "-90deg",
}

export interface Power {
    capacity: number;
}

export interface Radios {
    "6e"?:  The6_E;
    na?:    The6_E;
    ng?:    The6_E;
    swift?: Swift;
}

export interface The6_E {
    gain?:                     number;
    maxPower?:                 number;
    maxSpeedMegabitsPerSecond: number;
}

export interface Swift {
    gain:     number;
    maxPower: number;
}

export interface Rps {
    diagram:               string[];
    primaryPortGroupCount: number;
}

export interface ShadowMode {
    interconnectPortInterface: string;
    interconnectPortNumber:    number;
}

export enum Subtype {
    Uap = "uap",
    Ugw = "ugw",
    Usw = "usw",
}

export interface TemperatureSensor {
    maxTemp?: number;
    sensor:   string;
}

export interface Protect {
    fov:               number;
    suggestedDistance: number;
}

export interface Videos {
    "mobile-intro"?:                           string;
    "mobile-setup-wizard-plugin"?:             string;
    "mobile-setup-wizard-testing-connection"?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toDatasource(json: string): Datasource {
        return cast(JSON.parse(json), r("Datasource"));
    }

    public static datasourceToJson(value: Datasource): string {
        return JSON.stringify(uncast(value, r("Datasource")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Datasource": o([
        { json: "devices", js: "devices", typ: a(r("Device")) },
        { json: "version", js: "version", typ: "" },
    ], false),
    "Device": o([
        { json: "guids", js: "guids", typ: a("") },
        { json: "icon", js: "icon", typ: r("Icon") },
        { json: "id", js: "id", typ: "" },
        { json: "images", js: "images", typ: r("Images") },
        { json: "line", js: "line", typ: r("Line") },
        { json: "product", js: "product", typ: r("Product") },
        { json: "shortnames", js: "shortnames", typ: a("") },
        { json: "sku", js: "sku", typ: "" },
        { json: "sysid", js: "sysid", typ: u(undefined, "") },
        { json: "sysids", js: "sysids", typ: a("") },
        { json: "triplets", js: "triplets", typ: a(r("Triplet")) },
        { json: "uisp", js: "uisp", typ: u(undefined, r("Uisp")) },
        { json: "videos", js: "videos", typ: r("Videos") },
        { json: "btle", js: "btle", typ: u(undefined, r("Btle")) },
        { json: "jrf", js: "jrf", typ: u(undefined, a("")) },
        { json: "jpa", js: "jpa", typ: u(undefined, a("")) },
        { json: "compliance", js: "compliance", typ: u(undefined, r("Compliance")) },
        { json: "deviceType", js: "deviceType", typ: u(undefined, r("DeviceType")) },
        { json: "minAdoptVersion", js: "minAdoptVersion", typ: u(undefined, r("MinAdoptVersion")) },
        { json: "unifi", js: "unifi", typ: u(undefined, r("Unifi")) },
        { json: "isARSupported", js: "isARSupported", typ: u(undefined, true) },
        { json: "fcc", js: "fcc", typ: u(undefined, "") },
        { json: "ic", js: "ic", typ: u(undefined, "") },
    ], false),
    "Btle": o([
        { json: "factoryDefault", js: "factoryDefault", typ: "" },
        { json: "userConfigured", js: "userConfigured", typ: "" },
    ], false),
    "Compliance": o([
        { json: "fcc", js: "fcc", typ: u(undefined, "") },
        { json: "ic", js: "ic", typ: u(undefined, "") },
        { json: "icEmi", js: "icEmi", typ: r("ICEmi") },
        { json: "modelName", js: "modelName", typ: "" },
        { json: "rcm", js: "rcm", typ: u(undefined, true) },
        { json: "rfCmFcc", js: "rfCmFcc", typ: u(undefined, 0) },
        { json: "rfCmIc", js: "rfCmIc", typ: u(undefined, 0) },
        { json: "text", js: "text", typ: r("Text") },
        { json: "anatel", js: "anatel", typ: u(undefined, "") },
        { json: "ncc", js: "ncc", typ: u(undefined, "") },
        { json: "productName", js: "productName", typ: u(undefined, "") },
        { json: "cn", js: "cn", typ: u(undefined, "") },
        { json: "jrf", js: "jrf", typ: u(undefined, a("")) },
        { json: "wifi", js: "wifi", typ: u(undefined, r("Wifi")) },
        { json: "indoorOnly", js: "indoorOnly", typ: u(undefined, true) },
        { json: "kc", js: "kc", typ: u(undefined, "") },
        { json: "jnfc", js: "jnfc", typ: u(undefined, "") },
        { json: "jpa", js: "jpa", typ: u(undefined, a("")) },
    ], false),
    "Text": o([
        { json: "CA", js: "CA", typ: a(r("CA")) },
        { json: "US", js: "US", typ: u(undefined, a(r("Ua"))) },
        { json: "BR", js: "BR", typ: u(undefined, a("")) },
        { json: "UA", js: "UA", typ: u(undefined, a(r("Ua"))) },
    ], false),
    "Icon": o([
        { json: "id", js: "id", typ: "" },
        { json: "resolutions", js: "resolutions", typ: a(a(0)) },
    ], false),
    "Images": o([
        { json: "default", js: "default", typ: "" },
        { json: "nopadding", js: "nopadding", typ: "" },
        { json: "topology", js: "topology", typ: "" },
        { json: "mobile-connection", js: "mobile-connection", typ: u(undefined, "") },
        { json: "mobile-internet-connected", js: "mobile-internet-connected", typ: u(undefined, "") },
        { json: "mobile-no-internet", js: "mobile-no-internet", typ: u(undefined, "") },
        { json: "left-nopadding", js: "left-nopadding", typ: u(undefined, "") },
        { json: "right-nopadding", js: "right-nopadding", typ: u(undefined, "") },
    ], false),
    "Line": o([
        { json: "id", js: "id", typ: r("ID") },
        { json: "name", js: "name", typ: r("Name") },
    ], false),
    "MinAdoptVersion": o([
        { json: "net", js: "net", typ: u(undefined, "") },
        { json: "protect", js: "protect", typ: u(undefined, "") },
    ], false),
    "Product": o([
        { json: "abbrev", js: "abbrev", typ: "" },
        { json: "name", js: "name", typ: "" },
    ], false),
    "Triplet": o([
        { json: "k1", js: "k1", typ: u(undefined, "") },
        { json: "k2", js: "k2", typ: u(undefined, "") },
        { json: "k3", js: "k3", typ: u(undefined, "") },
    ], false),
    "Uisp": o([
        { json: "bleServices", js: "bleServices", typ: m(r("BleServiceValue")) },
        { json: "firmware", js: "firmware", typ: r("Firmware") },
        { json: "line", js: "line", typ: "" },
        { json: "nameLegacy", js: "nameLegacy", typ: a("") },
    ], false),
    "BleServiceValue": o([
        { json: "mode", js: "mode", typ: r("Mode") },
    ], false),
    "Firmware": o([
        { json: "board", js: "board", typ: a("") },
        { json: "platform", js: "platform", typ: u(null, "") },
    ], false),
    "Unifi": o([
        { json: "adoptability", js: "adoptability", typ: u(undefined, r("Adoptability")) },
        { json: "network", js: "network", typ: u(undefined, r("Network")) },
        { json: "protect", js: "protect", typ: u(undefined, r("Protect")) },
    ], false),
    "Network": o([
        { json: "bleServices", js: "bleServices", typ: u(undefined, a(r("BleServiceElement"))) },
        { json: "deviceCapabilities", js: "deviceCapabilities", typ: a("") },
        { json: "model", js: "model", typ: "" },
        { json: "radios", js: "radios", typ: r("Radios") },
        { json: "type", js: "type", typ: "" },
        { json: "chipset", js: "chipset", typ: u(undefined, "") },
        { json: "ethernetMaxSpeedMegabitsPerSecond", js: "ethernetMaxSpeedMegabitsPerSecond", typ: u(undefined, 0) },
        { json: "features", js: "features", typ: u(undefined, r("NetworkFeatures")) },
        { json: "minimumFirmwareRequired", js: "minimumFirmwareRequired", typ: u(undefined, u(null, "")) },
        { json: "numberOfPorts", js: "numberOfPorts", typ: u(undefined, 0) },
        { json: "systemIdHexadecimal", js: "systemIdHexadecimal", typ: u(undefined, "") },
        { json: "diagram", js: "diagram", typ: u(undefined, a("")) },
        { json: "ports", js: "ports", typ: u(undefined, r("NetworkGroups")) },
        { json: "details", js: "details", typ: u(undefined, r("Details")) },
        { json: "knownUnsupportedFeatures", js: "knownUnsupportedFeatures", typ: u(undefined, a(r("KnownUnsupportedFeature"))) },
        { json: "linkNegotiation", js: "linkNegotiation", typ: u(undefined, r("LinkNegotiation")) },
        { json: "networkGroups", js: "networkGroups", typ: u(undefined, r("NetworkGroups")) },
        { json: "shadowMode", js: "shadowMode", typ: u(undefined, r("ShadowMode")) },
        { json: "subtypes", js: "subtypes", typ: u(undefined, a(r("Subtype"))) },
        { json: "hybrid", js: "hybrid", typ: u(undefined, "") },
        { json: "switchPorts", js: "switchPorts", typ: u(undefined, a(0)) },
        { json: "optionalWanPortIndexes", js: "optionalWanPortIndexes", typ: u(undefined, a(0)) },
        { json: "power", js: "power", typ: u(undefined, r("Power")) },
        { json: "temperatureSensors", js: "temperatureSensors", typ: u(undefined, a(r("TemperatureSensor"))) },
        { json: "primaryPortGroupCount", js: "primaryPortGroupCount", typ: u(undefined, 0) },
        { json: "outlets", js: "outlets", typ: u(undefined, r("Outlets")) },
        { json: "outletsDiagram", js: "outletsDiagram", typ: u(undefined, a("")) },
        { json: "primaryOutletGroupCount", js: "primaryOutletGroupCount", typ: u(undefined, 0) },
        { json: "rps", js: "rps", typ: u(undefined, r("Rps")) },
        { json: "optionalWanPortNumbers", js: "optionalWanPortNumbers", typ: u(undefined, a(0)) },
    ], false),
    "BleServiceElement": o([
        { json: "configured", js: "configured", typ: "" },
        { json: "default", js: "default", typ: "" },
        { json: "features", js: "features", typ: u(undefined, r("BleServiceFeatures")) },
    ], false),
    "BleServiceFeatures": o([
        { json: "ucore", js: "ucore", typ: true },
    ], false),
    "Details": o([
        { json: "ipsThroughput", js: "ipsThroughput", typ: "" },
        { json: "legacyPortRemap", js: "legacyPortRemap", typ: u(undefined, true) },
    ], false),
    "NetworkFeatures": o([
        { json: "atfDisabled", js: "atfDisabled", typ: u(undefined, true) },
        { json: "ax", js: "ax", typ: u(undefined, true) },
        { json: "bandsteer", js: "bandsteer", typ: u(undefined, true) },
        { json: "be", js: "be", typ: u(undefined, true) },
        { json: "gen", js: "gen", typ: u(undefined, 0) },
        { json: "outdoorModeSupport", js: "outdoorModeSupport", typ: u(undefined, true) },
        { json: "poe", js: "poe", typ: u(undefined, true) },
        { json: "zh", js: "zh", typ: u(undefined, true) },
        { json: "ac", js: "ac", typ: u(undefined, true) },
        { json: "brcm", js: "brcm", typ: u(undefined, true) },
        { json: "airTime", js: "airTime", typ: u(undefined, true) },
        { json: "airView", js: "airView", typ: u(undefined, true) },
        { json: "dfs", js: "dfs", typ: u(undefined, true) },
        { json: "fan", js: "fan", typ: u(undefined, r("Fan")) },
        { json: "legacyPortRemap", js: "legacyPortRemap", typ: u(undefined, true) },
        { json: "sfpPlusSupported", js: "sfpPlusSupported", typ: u(undefined, true) },
        { json: "uplinkPort", js: "uplinkPort", typ: u(undefined, 0) },
    ], false),
    "LinkNegotiation": o([
        { json: "eth0", js: "eth0", typ: u(undefined, r("Eth0Class")) },
        { json: "eth1", js: "eth1", typ: u(undefined, r("Eth0Class")) },
        { json: "eth2", js: "eth2", typ: u(undefined, r("Eth2Class")) },
        { json: "eth3", js: "eth3", typ: u(undefined, r("Eth2Class")) },
        { json: "eth4", js: "eth4", typ: u(undefined, r("Eth2Class")) },
        { json: "eth5", js: "eth5", typ: u(undefined, r("Eth0Class")) },
        { json: "eth6", js: "eth6", typ: u(undefined, r("Eth2Class")) },
        { json: "eth10", js: "eth10", typ: u(undefined, r("Eth0Class")) },
        { json: "eth7", js: "eth7", typ: u(undefined, r("Eth2Class")) },
        { json: "eth8", js: "eth8", typ: u(undefined, r("Eth2Class")) },
        { json: "eth9", js: "eth9", typ: u(undefined, r("Eth0Class")) },
        { json: "eth15", js: "eth15", typ: u(undefined, r("Eth0Class")) },
        { json: "eth16", js: "eth16", typ: u(undefined, r("Eth0Class")) },
        { json: "eth18", js: "eth18", typ: u(undefined, r("Eth0Class")) },
        { json: "eth19", js: "eth19", typ: u(undefined, r("Eth0Class")) },
    ], false),
    "Eth0Class": o([
        { json: "portIdx", js: "portIdx", typ: 0 },
        { json: "supportedValues", js: "supportedValues", typ: a(r("SupportedValue")) },
    ], false),
    "Eth2Class": o([
        { json: "portIdx", js: "portIdx", typ: u(undefined, 0) },
        { json: "supportedValues", js: "supportedValues", typ: u(undefined, a(r("SupportedValue"))) },
        { json: "bindWith", js: "bindWith", typ: u(undefined, "") },
    ], false),
    "NetworkGroups": o([
        { json: "eth0", js: "eth0", typ: u(undefined, "") },
        { json: "eth1", js: "eth1", typ: u(undefined, "") },
        { json: "eth2", js: "eth2", typ: u(undefined, "") },
        { json: "eth3", js: "eth3", typ: u(undefined, "") },
        { json: "eth4", js: "eth4", typ: u(undefined, "") },
        { json: "eth5", js: "eth5", typ: u(undefined, "") },
        { json: "eth6", js: "eth6", typ: u(undefined, "") },
        { json: "eth10", js: "eth10", typ: u(undefined, "") },
        { json: "eth7", js: "eth7", typ: u(undefined, "") },
        { json: "eth8", js: "eth8", typ: u(undefined, "") },
        { json: "eth9", js: "eth9", typ: u(undefined, "") },
        { json: "eth11", js: "eth11", typ: u(undefined, "") },
        { json: "eth12", js: "eth12", typ: u(undefined, "") },
        { json: "eth13", js: "eth13", typ: u(undefined, "") },
        { json: "eth14", js: "eth14", typ: u(undefined, "") },
        { json: "eth15", js: "eth15", typ: u(undefined, "") },
        { json: "eth16", js: "eth16", typ: u(undefined, "") },
        { json: "eth17", js: "eth17", typ: u(undefined, "") },
        { json: "eth18", js: "eth18", typ: u(undefined, "") },
        { json: "eth19", js: "eth19", typ: u(undefined, "") },
        { json: "sfp28", js: "sfp28", typ: u(undefined, u(a(0), "")) },
        { json: "standard", js: "standard", typ: u(undefined, u(a(0), 0, "")) },
        { json: "qsfp28", js: "qsfp28", typ: u(undefined, "") },
        { json: "plus", js: "plus", typ: u(undefined, u(a(0), 0, "")) },
        { json: "sfp", js: "sfp", typ: u(undefined, a(0)) },
        { json: "wan", js: "wan", typ: u(undefined, a(0)) },
    ], false),
    "Outlets": o([
        { json: "lan", js: "lan", typ: u(undefined, a(0)) },
        { json: "meta", js: "meta", typ: u(undefined, m(r("Meta"))) },
        { json: "standard", js: "standard", typ: u(a(0), 0, "") },
        { json: "usb", js: "usb", typ: u(undefined, u(a(0), "")) },
        { json: "wan", js: "wan", typ: u(undefined, a(0)) },
    ], false),
    "Meta": o([
        { json: "center", js: "center", typ: u(undefined, true) },
        { json: "rotation", js: "rotation", typ: u(undefined, r("Rotation")) },
        { json: "marginLeft", js: "marginLeft", typ: u(undefined, "") },
        { json: "nonClickable", js: "nonClickable", typ: u(undefined, true) },
        { json: "portIdx", js: "portIdx", typ: u(undefined, 0) },
    ], false),
    "Power": o([
        { json: "capacity", js: "capacity", typ: 0 },
    ], false),
    "Radios": o([
        { json: "6e", js: "6e", typ: u(undefined, r("The6_E")) },
        { json: "na", js: "na", typ: u(undefined, r("The6_E")) },
        { json: "ng", js: "ng", typ: u(undefined, r("The6_E")) },
        { json: "swift", js: "swift", typ: u(undefined, r("Swift")) },
    ], false),
    "The6_E": o([
        { json: "gain", js: "gain", typ: u(undefined, 0) },
        { json: "maxPower", js: "maxPower", typ: u(undefined, 0) },
        { json: "maxSpeedMegabitsPerSecond", js: "maxSpeedMegabitsPerSecond", typ: 0 },
    ], false),
    "Swift": o([
        { json: "gain", js: "gain", typ: 0 },
        { json: "maxPower", js: "maxPower", typ: 0 },
    ], false),
    "Rps": o([
        { json: "diagram", js: "diagram", typ: a("") },
        { json: "primaryPortGroupCount", js: "primaryPortGroupCount", typ: 0 },
    ], false),
    "ShadowMode": o([
        { json: "interconnectPortInterface", js: "interconnectPortInterface", typ: "" },
        { json: "interconnectPortNumber", js: "interconnectPortNumber", typ: 0 },
    ], false),
    "TemperatureSensor": o([
        { json: "maxTemp", js: "maxTemp", typ: u(undefined, 0) },
        { json: "sensor", js: "sensor", typ: "" },
    ], false),
    "Protect": o([
        { json: "fov", js: "fov", typ: 3.14 },
        { json: "suggestedDistance", js: "suggestedDistance", typ: 3.14 },
    ], false),
    "Videos": o([
        { json: "mobile-intro", js: "mobile-intro", typ: u(undefined, "") },
        { json: "mobile-setup-wizard-plugin", js: "mobile-setup-wizard-plugin", typ: u(undefined, "") },
        { json: "mobile-setup-wizard-testing-connection", js: "mobile-setup-wizard-testing-connection", typ: u(undefined, "") },
    ], false),
    "ICEmi": [
        "CAN ices-003(B)/NMB-003(B)",
        "Can ICES-003(A)/NMB-003(A)",
        "CAN ICES-003(A)/NMB-003(A)",
        "CAN ICES-003(B)/NMB-003(B)",
    ],
    "CA": [
        "IC",
        "RF",
        "SAR",
        "www",
        "WIFI_5",
        "WIFI_5_DET_ANT",
        "WIFI_6",
    ],
    "Ua": [
        "FCC_A",
        "FCC_B",
        "RF",
        "SAR",
        "WIFI_5",
        "WIFI_6",
    ],
    "Wifi": [
        "5e",
        "6e",
    ],
    "DeviceType": [
        "camera",
        "chime",
        "console",
        "doorlock",
        "light",
        "network-server-host",
        "sensor",
        "viewer",
    ],
    "ID": [
        "airfiber",
        "airmax",
        "amplifi",
        "apollo",
        "edgemax",
        "ltu",
        "mfi",
        "sunmax",
        "ufiber",
        "uisp",
        "unifi-access",
        "unifi-connect",
        "unifi-drive",
        "unifi-led",
        "unifi-lte",
        "unifi-mobility",
        "unifi-network",
        "unifi-protect",
        "unifi-talk",
        "unknown",
        "wave",
        "wifiman",
    ],
    "Name": [
        "AirFiber",
        "airMAX",
        "AmpliFi",
        "Apollo",
        "EdgeMAX",
        "LTU",
        "mFi",
        "SunMAX",
        "UFiber",
        "UISP",
        "UniFi",
        "UniFi Access",
        "UniFi Connect",
        "UniFi Drive",
        "UniFi LED",
        "UniFi LTE",
        "UniFi Mobility",
        "UniFi Protect",
        "UniFi Talk",
        "Unknown",
        "Wave",
        "WiFiMan",
    ],
    "Mode": [
        "default",
        "default_legacy",
        "factory",
        "factory_legacy",
    ],
    "Adoptability": [
        "adoptable",
        "standalone",
    ],
    "Fan": [
        "alwayson",
        "simple",
    ],
    "KnownUnsupportedFeature": [
        "SWITCH_CAP_DOT1X",
        "SWITCH_CAP_EGRESS_RATE_LIMIT",
        "SWITCH_CAP_LLDP_MED",
        "SWITCH_CAP_PORT_ISOLATION",
        "SWITCH_CAP_STORM_CONTROL",
        "SWITCH_CAP_STP",
    ],
    "SupportedValue": [
        "autoneg",
        "10000 FDX",
        "1000 FDX",
        "100 FDX",
        "100 HDX",
        "10 FDX",
        "10 HDX",
        "25000 FDX",
        "2500 FDX",
        "5000 FDX",
    ],
    "Rotation": [
        "-90deg",
    ],
    "Subtype": [
        "uap",
        "ugw",
        "usw",
    ],
};
