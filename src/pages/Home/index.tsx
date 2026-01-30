
import { html } from "@ezbug/slash";

import { Title } from "@/components/Title";
import { Badge} from '@/components/Badge';
import { Icon } from '@/components/Icon';
import { Input, type InputChangeEvent } from "@/components/Input";
import styles from '../../styles/tasks.module.css.d';
export function Home () {


  const validateCpf = (event:InputChangeEvent) => {
    const {value}= event.target
    // const isValid = value.length === 11
    const isValid = +value >= 5
    if(isValid ) {
      event.target.style.background = "green"
      return 
    }
    event.target.style.background = "red"
  }

  return html`
  <div>
   <${Title} type="h1" value="AI Solutions That Take Your Business to the Next Level"/>
   <${Title} type="h2" value="AI Solutions That Take Your Business to the Next Level"/>
   <${Title} type="h4" value="AI Solutions That Take Your Business to the Next Level"/>
   <${Title} type="h3" value="AI Solutions That Take Your Business to the Next Level"/>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, maiores?</p>
   <${Badge} value="Ativo"/>
   <${Badge} value="Promoção"/>
   <${Icon} name="home" />
   <${Icon} name="check" size=${16}/>
   <${Icon} name="warning"/>
   <${Input} 
    id="cpf"
    label="Fister Name"
    placeholder="Informe seu cpf" 
    type="text" 
    handler=${validateCpf}
    required="true"
    errorMessage="Campo obrigatorio"
   />
   </div>
  `;
}