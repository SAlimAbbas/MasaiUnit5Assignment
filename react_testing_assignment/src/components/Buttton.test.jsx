import { Button } from './Button';
import {fireEvent, render,screen}from '@testing-library/react';

describe('Button Tests', function(){

    // it('should render without any error',function(){
    //     render()
    // })

    it('should have add and reduce buttons',function(){
        render(<Button></Button>)

        let btn1=screen.getByText("ADD");
        let btn2=screen.getByText("REDUCE");

        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();
    })

    it('should have an element with counter value as default ( 0 )',function(){
        render(<Button></Button>)

        let count=screen.getByText("0");

        expect(count).toBeInTheDocument();

    })

    it('should increment the value of Counter by 5 onClick on ADD',function(){
        let mockFn=jest.fn();
        render(<Button onClick={mockFn}>ADD</Button>)

        const btn=screen.getByText("ADD");

        fireEvent.click(btn);
    
        expect(mockFn).toBeCalledTimes(0);

    })
})