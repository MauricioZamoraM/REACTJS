import React from "react";

//Page Standard
import Standard from "../views/Standard/Standard";

// Dashboard
import EventManagement from "../sharedComponents/dashboard/EventManagement";
import SalesMonitoring from "../sharedComponents/dashboard/SalesMonitoring";
import WebsiteAnalytics from "../sharedComponents/dashboard/WebsiteAnalytics";
import FinanceMonitoring from "../sharedComponents/dashboard/FinanceMonitoring";
import Cryptocurrency from "../sharedComponents/dashboard/Cryptocurrency";
import HelpdeskService from "../sharedComponents/dashboard/HelpdeskService";
import StorageManagement from "../sharedComponents/dashboard/StorageManagement";
import ProductManagement from "../sharedComponents/dashboard/ProductManagement";

// Apps
import GalleryMusic from "../sharedComponents/apps/GalleryMusic";
import GalleryVideo from "../sharedComponents/apps/GalleryVideo";
import Tasks from "../sharedComponents/apps/Tasks";
import Contacts from "../sharedComponents/apps/Contacts";
import Chat from "../sharedComponents/apps/Chat";
import AppCalendar from "../sharedComponents/apps/AppCalendar";
import Email from "../sharedComponents/apps/Email";
import FileManager from "../sharedComponents/apps/FileManager";

// Pages
import Pricing from "../views/Pricing/Pricing"
import Faq from "../views/Faq/Faq";
import Profile from "../views/Profile/Profile";
import People from "../views/People/People";
import Activity from "../views/Activity/Activity";
import Events from "../views/Events/Events";
import Settings from "../views/Settings/Settings";

// UI Elements
import LayoutColumns from "../sharedComponents/docs/LayoutColumns";
import LayoutGrid from "../sharedComponents/docs/LayoutGrid";
import LayoutGutters from "../sharedComponents/docs/LayoutGutters";
import Accordions from "../sharedComponents/docs/Accordions";
import Alerts from "../sharedComponents/docs/Alerts";
import Avatars from "../sharedComponents/docs/Avatars";
import Badges from "../sharedComponents/docs/Badges";
import Breadcrumbs from "../sharedComponents/docs/Breadcrumbs";
import Buttons from "../sharedComponents/docs/Buttons";
import Cards from "../sharedComponents/docs/Cards";
import Carousels from "../sharedComponents/docs/Carousels";
import Dropdowns from "../sharedComponents/docs/Dropdowns";
import Images from "../sharedComponents/docs/Images";
import Listgroup from "../sharedComponents/docs/Listgroup";
import Markers from "../sharedComponents/docs/Markers";
import Modals from "../sharedComponents/docs/Modals";
import NavTabs from "../sharedComponents/docs/NavTabs";
import OffCanvas from "../sharedComponents/docs/OffCanvas";
import Paginations from "../sharedComponents/docs/Paginations";
import Placeholders from "../sharedComponents/docs/Placeholders";
import Popovers from "../sharedComponents/docs/Popovers";
import Progress from "../sharedComponents/docs/Progress";
import Spinners from "../sharedComponents/docs/Spinners";
import Toasts from "../sharedComponents/docs/Toasts";
import Tooltips from "../sharedComponents/docs/Tooltips";
import Tables from "../sharedComponents/docs/Tables";
import FormElements from "../sharedComponents/docs/FormElements";
import FormSelects from "../sharedComponents/docs/FormSelects";
import FormChecksRadios from "../sharedComponents/docs/FormChecksRadios";
import FormRange from "../sharedComponents/docs/FormRange";
import FormPickers from "../sharedComponents/docs/FormPickers";
import FormLayouts from "../sharedComponents/docs/FormLayouts";
import UtilBackground from "../sharedComponents/docs/UtilBackground";
import UtilBorder from "../sharedComponents/docs/UtilBorder";
import UtilColors from "../sharedComponents/docs/UtilColors";
import UtilDivider from "../sharedComponents/docs/UtilDivider";
import UtilFlex from "../sharedComponents/docs/UtilFlex";
import UtilSizing from "../sharedComponents/docs/UtilSizing";
import UtilSpacing from "../sharedComponents/docs/UtilSpacing";
import UtilOpacity from "../sharedComponents/docs/UtilOpacity";
import UtilPosition from "../sharedComponents/docs/UtilPosition";
import UtilTypography from "../sharedComponents/docs/UtilTypography";
import UtilShadows from "../sharedComponents/docs/UtilShadows";
import UtilExtras from "../sharedComponents/docs/UtilExtras";
import ApexCharts from "../sharedComponents/docs/ApexCharts";
import ChartJs from "../sharedComponents/docs/ChartJs";
import MapLeaflet from "../sharedComponents/docs/MapLeaflet";
import MapVector from "../sharedComponents/docs/MapVector";
import IconRemix from "../sharedComponents/docs/IconRemix";
import IconFeather from "../sharedComponents/docs/IconFeather";

// Gestion de mantenimientos
import ListUsers from "../views/Users/ListUsers";
import Modulos from "../views/Modulos/Modulos";
import ModulosEditar from "../views/Modulos/ModulosEditar";
import Procesos from "../views/Procesos/Procesos";
import ProcesosEditar from "../views/Procesos/ProcesosEditar";
import Pec from "../views/Pec/Pec";
import PecEditar from "../views/Pec/PecEditar";
import Campos from "../views/Campos/Campos";
import CamposEditar from "../views/Campos/CamposEditar";
import ParametrosGenerales from "../views/ParametrosGenerales/ParametrosGenerales";
import ParametrosGeneralesEditar from "../views/ParametrosGenerales/ParametrosGeneralesEditar";
import TiposDeCampos from "../views/TiposDeCampos/TiposDeCampos";
import TiposDeCamposEditar from "../views/TiposDeCampos/TiposDeCamposEditar";
import Pagos from "../views/Pagos/pagos";
import PagosEditar from "../views/Pagos/pagosEditar";
import FlujoDeTrabajo from "../views/FlujoDeTrabajo/FlujoDeTrabajo";
import FlujoDeTrabajoEditar from "../views/FlujoDeTrabajo/FlujoDeTrabajoEditar";
//TipoSolicitudes
import TipoSolicitud from "../views/TipoSolicitud/TipoSolicitud";
import TipoSolicitudEditar from "../views/TipoSolicitud/TipoSolicitudEditar";


const protectedRoutes = [
  { path: "dashboard/finance", element: <FinanceMonitoring /> },
  { path: "dashboard/events", element: <EventManagement /> },
  { path: "dashboard/sales", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "dashboard/crypto", element: <Cryptocurrency /> },
  { path: "dashboard/helpdesk", element: <HelpdeskService /> },
  { path: "dashboard/storage", element: <StorageManagement /> },
  { path: "dashboard/product", element: <ProductManagement /> },
  { path: "apps/gallery-music", element: <GalleryMusic /> },
  { path: "apps/gallery-video", element: <GalleryVideo /> },
  { path: "apps/tasks", element: <Tasks /> },
  { path: "apps/contacts", element: <Contacts /> },
  { path: "apps/chat", element: <Chat /> },
  { path: "apps/calendar", element: <AppCalendar /> },
  { path: "apps/email", element: <Email /> },
  { path: "apps/file-manager", element: <FileManager /> },
  { path: "pages/standard", element: <Standard /> },
  { path: "pages/users", element: <ListUsers/> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  { path: "pages/events", element: <Events /> },
  { path: "pages/settings", element: <Settings /> },
  { path: "docs/layout/grid", element: <LayoutGrid /> },
  { path: "docs/layout/columns", element: <LayoutColumns /> },
  { path: "docs/layout/gutters", element: <LayoutGutters /> },
  { path: "docs/com/accordions", element: <Accordions /> },
  { path: "docs/com/alerts", element: <Alerts /> },
  { path: "docs/com/avatars", element: <Avatars /> },
  { path: "docs/com/badge", element: <Badges /> },
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "docs/com/buttons", element: <Buttons /> },
  { path: "docs/com/cards", element: <Cards /> },
  { path: "docs/com/carousel", element: <Carousels /> },
  { path: "docs/com/dropdown", element: <Dropdowns /> },
  { path: "docs/com/images", element: <Images /> },
  { path: "docs/com/listgroup", element: <Listgroup /> },
  { path: "docs/com/markers", element: <Markers /> },
  { path: "docs/com/modal", element: <Modals /> },
  { path: "docs/com/navtabs", element: <NavTabs /> },
  { path: "docs/com/offcanvas", element: <OffCanvas /> },
  { path: "docs/com/pagination", element: <Paginations /> },
  { path: "docs/com/placeholders", element: <Placeholders /> },
  { path: "docs/com/popovers", element: <Popovers /> },
  { path: "docs/com/progress", element: <Progress /> },
  { path: "docs/com/spinners", element: <Spinners /> },
  { path: "docs/com/toasts", element: <Toasts /> },
  { path: "docs/com/tooltips", element: <Tooltips /> },
  { path: "docs/com/tables", element: <Tables /> },
  { path: "docs/form/elements", element: <FormElements /> },
  { path: "docs/form/selects", element: <FormSelects /> },
  { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  { path: "docs/form/range", element: <FormRange /> },
  { path: "docs/form/pickers", element: <FormPickers /> },
  { path: "docs/form/layouts", element: <FormLayouts /> },
  { path: "docs/chart/apex", element: <ApexCharts /> },
  { path: "docs/chart/chartjs", element: <ChartJs /> },
  { path: "docs/map/leaflet", element: <MapLeaflet /> },
  { path: "docs/map/vector", element: <MapVector /> },
  { path: "docs/icon/remix", element: <IconRemix /> },
  { path: "docs/icon/feather", element: <IconFeather /> },
  { path: "docs/util/background", element: <UtilBackground /> },
  { path: "docs/util/border", element: <UtilBorder /> },
  { path: "docs/util/colors", element: <UtilColors /> },
  { path: "docs/util/divider", element: <UtilDivider /> },
  { path: "docs/util/flex", element: <UtilFlex /> },
  { path: "docs/util/sizing", element: <UtilSizing /> },
  { path: "docs/util/spacing", element: <UtilSpacing /> },
  { path: "docs/util/opacity", element: <UtilOpacity /> },
  { path: "docs/util/position", element: <UtilPosition /> },
  { path: "docs/util/typography", element: <UtilTypography /> },
  { path: "docs/util/shadows", element: <UtilShadows /> },
  { path: "docs/util/extras", element: <UtilExtras /> },
  { path: "pages/modulos", element: <Modulos/>},
  // { path: "pages/modulosEditar", element: <ModulosEditar/>},
  { path: "pages/procesos", element: <Procesos/> },
  // { path: "pages/procesosEditar", element: <ProcesosEditar/>},
  { path: "pages/pec", element: <Pec/> },
  // { path: "pages/pecEditar", element: <PecEditar/>},
  { path: "pages/campos", element: <Campos />},
  // { path: "pages/camposEditar", element: <CamposEditar/>},
  { path: "pages/parametrosGenerales", element: <ParametrosGenerales/>},
  // { path: "pages/parametrosGeneralesEditar", element: <ParametrosGeneralesEditar/>},
  { path: "pages/tiposCampos", element: <TiposDeCampos/> },
  // { path: "pages/tiposCamposEditar", element: <TiposDeCamposEditar/> },
  { path: "pages/pagos", element: <Pagos/> },
  // { path: "pages/pagosEditar", element: <PagosEditar/> },
  { path: "pages/flujoTrabajo", element: <FlujoDeTrabajo />},
  // { path: "pages/flujoTrabajoEditar", element: <FlujoDeTrabajoEditar/>}
  { path: "pages/tipoSolicitud", element: <TipoSolicitud /> }, 
  { path: "pages/tipoSolicitudEditar", element: <TipoSolicitudEditar /> }
]

export default protectedRoutes;