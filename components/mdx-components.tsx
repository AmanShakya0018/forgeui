import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./user/callout";
import { NbButton } from "./user/buttons";
import PreviewBox from "./docs-components/previewbox";
import Avatar from "./user/avatar";
import Badge from "./user/badge";
import Card from "./user/card";
import CheckBox from "./user/checkbox";
import Form from "./user/form";
import Footer from "./user/footer";
import Input from "./user/input";
import Progress from "./user/progress";
import Rating from "./user/rating";
import Select from "./user/select";
import Switch from "./user/switch";
import Table from "./user/table";
import Textarea from "./user/textarea";
import Gallery from "./user/gallery";
import ButtonGroup from "./user/buttongroup";
import Alerts from "./user/alerts";
import Indicators from "./user/indicators";
import KBD from "./user/kbd";
import Listgroup from "./user/listgroup";
import Cookies from "./user/cookies";
import Pagination from "./user/pagination";
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};
const components = {
  Image,
  Callout,
  NbButton,
  PreviewBox,
  Avatar,
  Badge,
  Card,
  CheckBox,
  Form,
  Footer,
  Input,
  Progress,
  Rating,
  Select,
  Switch,
  Table,
  Textarea,
  Gallery,
  ButtonGroup,
  Alerts,
  Indicators,
  KBD,
  Listgroup,
  Cookies,
  Pagination
};
interface MdxProps {
  code: string;
}
export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}