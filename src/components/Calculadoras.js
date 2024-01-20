import './Calculadoras.css'

export default function Calculadoras() {

    

    
  return (
    <div id="Calcs">
        <div id='Ctempo'>
            <h2>CALCULADORA DE TEMPO</h2>
            <div id='Inputtempo'>
              DATA INICIAL:
              <input type='datetime-local' id='datainicial' />
              DATA FINAL:
              <input type='datetime-local' id='datafinal' />    
              SELECIONAR FORMATO:
              <select id='formato'>
                <option>ANOS</option>
                <option>MESES</option>
                <option>SEMANAS</option>
                <option>DIAS</option>
                <option>HORAS</option>
                <option>MINUTOS</option>
                <option>SEGUNDOS</option>
              </select>
              TEMPO:
              <input type='text' readOnly={true} id='saida' />

            </div>
            <button type='button' onClick={function(){
              var diferenca = new Date(document.getElementById('datafinal').value) - new Date(document.getElementById('datainicial').value)
              var formatoSelecionado = document.getElementById('formato').value
              if(diferenca > 0){
                switch (formatoSelecionado) {
                  case 'ANOS':
                    diferenca /= (1000 * 60 * 60 * 24 * 365);
                    break;
                  case 'MESES':
                    diferenca /= (1000 * 60 * 60 * 24 * 30);
                    break;
                  case 'SEMANAS':
                    diferenca /= (1000 * 60 * 60 * 24 * 7);
                    break;
                  case 'DIAS':
                    diferenca /= (1000 * 60 * 60 * 24);
                    break;
                  case 'HORAS':
                    diferenca /= (1000 * 60 * 60);
                    break;
                  case 'MINUTOS':
                    diferenca /= (1000 * 60);
                    break;
                  case 'SEGUNDOS':
                    diferenca /= 1000;
                    break;
                  default:
                    break;
                }
            
                document.getElementById('saida').value = diferenca.toFixed(2);
              }else{
                alert("Selecione medidas válidas")
              }
            }}>CALCULAR TEMPO</button>
              <button type='button' onClick={function(){
          document.getElementById("Ctempo").style.display = "none"
          document.getElementById("titulo-calcs").style.display = 'flex'
          document.getElementById("listaC").style.display = 'block'
        }}>VOLTAR</button>
      </div>

          
        <div id='Cporcentagem'>
        <h2>CALCULAR PORCENTAGEM</h2>
        <div id='Inputporcentagem'>
            VALOR INICIAL:
            <input type='text' id='inicial'/>
            PORCENTAGEM:
            <input type='text' placeholder='%' id='porcento'/>
            VALOR FINAL:
            <input type='text' readOnly={true} id='final'/>
        </div>
        <button type='button' onClick={function(){
            var valinicial = document.getElementById('inicial').value
            var porcento = document.getElementById('porcento').value 
            const valInicial = parseFloat(valinicial)
            const valPorcento = parseFloat(porcento)

            if (isNaN(valInicial) || isNaN(valPorcento)) {
                alert("Insira numeros")
                return 0;

            }
        

            document.getElementById('final').value = (parseFloat(valinicial)*parseFloat(porcento/100)).toFixed(2);


        }}>CALCULAR</button>
        <button type='button' onClick={function(){
          document.getElementById("Cporcentagem").style.display = "none"
          document.getElementById("titulo-calcs").style.display = 'flex'
          document.getElementById("listaC").style.display = 'block'
        }}>VOLTAR</button>
      </div>
      <h1 id='titulo-calcs'>CALCULADORAS</h1>
      <div id='listaC'>

        <div id='porcentagem' onClick={function(){
            document.getElementById("listaC").style.display = "none";
            document.getElementById("titulo-calcs").style.display = "none";
            document.getElementById("Cporcentagem").style.display = "flex";
        }}className='DisplayC'>CALCULADORA DE PORCENTAGEM</div>


        <div id='imc' className= 'DisplayC' onClick={function(){
            document.getElementById("listaC").style.display = "none";
            document.getElementById("titulo-calcs").style.display = "none";
            document.getElementById("Ctempo").style.display = "flex";
        }}>CALCULADORA DE TEMPO</div>

      </div>
      
    </div>

  );
}













