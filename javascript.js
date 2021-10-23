        let box1 = document.querySelector('#bo1')
        let mox2 = document.querySelector('#mo2')
        let res = document.querySelector('#res')

        function Subtrair() {
            let number1 = Number(box1.value)
            let number2 = Number(mox2.value)
            Sb = number1 - number2
        
            if (Sb < 0) {
                Sb = Sb * -1
            }

            res.innerHTML = `<p>A diferença de ${number1} - ${number2} é ${Sb} </p>`
        }


        let vox = document.querySelector('#vox')
        let vox2 = document.querySelector('#vox2')
        let rose = document.querySelector('#rose')

        function Somar() {
            let num1 = Number(vox.value)
            let num2 = Number(vox2.value)
            let Sm = num1 + num2

            rose.innerHTML = `<p>A soma de ${num1} + ${num2} é ${Sm}</p>`
        }

        let fish = document.querySelector('#fish')
        let fish2 = document.querySelector('#fish2')
        let violet = document.querySelector('#violet')

        function Multiplicar(){
            let n1 = Number(fish.value)
            let n2 = Number(fish2.value)
            let Mult = n1 * n2 

            violet.innerHTML = `<P>A multiplicação entre ${n1} x ${n2}  é  ${Mult} <p>`
            
        }

        let poul = document.querySelector('#poul')
        let poul2 = document.querySelector('#poul2')
        let carm = document.querySelector('#carm')

        function Dividir() {
            let nx1 = Number(poul.value)
            let nx2 = Number(poul2.value)
            Divi = nx1 / nx2
            if(nx2 === 0){
                window.alert('Impossivel Dividir')
            }else {
            carm.innerHTML = `<p>A divisão entre ${nx1} / ${nx2} é ${Divi}</p>`}
        }