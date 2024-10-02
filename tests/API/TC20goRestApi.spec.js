const { test, expect } = require('@playwright/test')

let id =

    test('List of User GET Api', async ({ request }) => {
        let req1 = await request.get('https://gorest.co.in/public/v2/users', {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
            }
        })

        // console.log(req1)
        let res1 = await req1.json()
        console.log(res1)
        expect(res1.length).toBe(10)
        expect(req1.status()).toBe(200)
        console.log(req1.status())
        console.log(res1[0])


    })


test.only('create user api', async ({ request }) => {

    let req2 = await request.post('https://gorest.co.in/public/v2/users', {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": " Bearer 8baa9672378d3e638fe752886e78faff44acd6e81a4240ded13e1db5165f3297"
        },
        data: {
            "name": "anjali dighe",
            "gender": "female",
            "email": `anjalidighe${Math.random(Math.floor() * 888)}@gmail.com`,
            "status": "active"
        }
    })

    let res2 = await req2.json()
    console.log(res2)
    id = res2.id
    expect(req2.status()).toBe(201)
    console.log(req2.status())
    expect(res2.name).toBe('anjali dighe')
    expect(res2.gender).toBe('female')
    expect(res2.status).toBe('active')
    console.log(id)

})