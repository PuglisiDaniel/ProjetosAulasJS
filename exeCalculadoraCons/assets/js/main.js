function Calculadora(){
    this.display = document.querySelector('.display');


    this.cliqueBotoes=()=>{
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')){
                this.btnParaDisplay(el);
            }

            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(el.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(el.classList.contains('btn-equal')){
                this.realizaConta(el);
            }
        });
    };


    this.clearDisplay=()=>this.display.value='';
    this.apagaUm=()=>this.display.value = this.display.value.slice(0,-1);

    this.btnParaDisplay = el =>{
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.realizaConta=()=>{
        try {
            const conta = eval(this.display.value);

            if(!conta){
                alert("Conta Inválida");
                return;

            }

            this.display.value =  conta;
            
        } catch (e) {
            alert("Conta Inválida");
            return;
        }
    };


    this.pressionaEnter=()=>{
        this.display.addEventListener('keyup', e =>{
            if(e.keyCode !== 13) return;

            this.realizaConta();
           
        });
    }

    this.inicia=()=>{
        this.cliqueBotoes();
        this.pressionaEnter();
    };

}

const calculadora = new Calculadora();
calculadora.inicia();
