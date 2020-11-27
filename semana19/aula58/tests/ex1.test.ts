import { performPurchase, User } from "../src/ex1"

describe('user with a balance greater than the purchase amount', () => {

    test('balance greater than the purchase amount', () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        }
        const result = performPurchase(user, 50)

        expect(result).toEqual({
            ...user,
            balance: 50
        })

    })


    test('user with the balance equal to the purchase value', ()=> {
        const user: User = {
            name: "Astrodev",
            balance: 80
        }
        const result = performPurchase(user, 80)

        expect(result).toEqual({...user,  balance: 0 })
    })


    test('user with the balance less than the purchase amount', ()=> {
        const user: User = {
            name: "Astrodev",
            balance: 30
        }
        const result = performPurchase(user, 60)

        expect(result).toEqual(undefined)
    })
})