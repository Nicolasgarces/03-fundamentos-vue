import {shallowMount} from "@vue/test-utils"
import Counter from "@/components/Counter"



describe('Counter Component', () => {

    let wrapper 

    beforeEach(() =>{
        wrapper = shallowMount(Counter)
    })

    // test('debe de hacer match con el snapshot', () => {

    //     const wrapper = shallowMount( Counter ) 

    //     expect( wrapper.html() ).toMatchSnapshot()


    // })


        test('h2 debe tener el valor por defecto "Counter"', () => {
            

           const h2 = wrapper.find('h2')

           expect( h2.text() ).toBe('Counter')


        })

        test('el valor por defecto debe ser 100 en el p', async()=>{
             //wrapper
           
            // const p = wrapper.findAll('p')
            const value = wrapper.find('[data-testid="counter"]').text()

            // console.log(p);
            // expect(p[1].text()).toBe('100')
            expect(value).toBe('100')

           
        })

        test('Debe de incrementar y decrementar el contador ', async() => {

            //extraemos los botones buscandolos por el tag `button`
            const [increaseBtn, decreaseBtn] = wrapper.findAll('button')
            //esperamos a que el DOM se actualice
            await increaseBtn.trigger('click')
            await increaseBtn.trigger('click')
            await increaseBtn.trigger('click')
            await decreaseBtn.trigger('click')
            await decreaseBtn.trigger('click')
            //traemos el valor del texto buscandolo por el testid 
            const value = wrapper.find('[data-testid="counter"]').text()
            //se espera a que el valor sea 101
            expect(value).toBe('101')
            
        })

        test('Debe de establecer el valor por defecto', () => {
            const {start} = wrapper.props() 

            const value = wrapper.find('[data-testid="counter"]').text()

            expect( Number(value)).toBe( start)
        })

        test('Debe de mostrar la prop title', () => {
// se llama el wrapper porque esta prueba es aislada si usamos el de arriba afectariamos las otras pruebas 
            
        const title = 'Hola Mundo!!!!!'

        const wrapper =  shallowMount (Counter, {
            props:{
                title,
                // start: '5'
            }
        })


        
        expect( wrapper.find('h2').text() ).toBe(title)


        })

})//para correr el test (yarn test:unit) 
// para actualiizar test ( yarn test:unit -u ) 