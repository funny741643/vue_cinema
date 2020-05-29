import Vue from 'vue'
import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Form,
  FormItem,
  Input,
  Link,
  Button,
  Carousel,
  CarouselItem,
  Row,
  Col,
  Rate,
  RadioGroup,
  RadioButton,
  Cascader,
  Dialog,
  Message,
  Table,
  TableColumn,
  DatePicker
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Link)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Col)
Vue.use(Row)
Vue.use(Rate)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Cascader)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.component(Message.name, Message)
Vue.prototype.$message = Message