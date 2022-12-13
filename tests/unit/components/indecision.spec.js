import {shallowMount} from "@vue/test-utils"
import Indecision from "@/components/Indecision"

describe('Indecision Component', () => {

    let wrapper
    let clgSpy

    beforeEach(() =>{
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, 'log')
        jest.clearAllMocks()
    })


    test('debe hacer match con el snapshot', async() =>{

        expect(wrapper.html()).toMatchSnapshot()

    })
    
    test('Escribir en el input no debe de disparar nada (console.log)', async() => {
       
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo')
        
        expect( clgSpy ).toHaveBeenCalledTimes(1) // esta funcion quiere decir que el console.log haya sido llamado al menos una vez
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })
    
    test('escribir el simbolo de "?" debe disparar el getAnswer', async() => {
        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer')

        const input = wrapper.find('input')
        await input.setValue('Hola Mundo?')
        
        expect( clgSpy ).toHaveBeenCalledTimes(1) // esta funcion quiere decir que el console.log haya sido llamado al menos una vez
        expect(getAnswerSpy).toHaveBeenCalled()
    })

    test('pruebas en getAnswer', () => {

    })

    test('pruebas en getAnswer - Fallo en en API', () => {
        
    });
})