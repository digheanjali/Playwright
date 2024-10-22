const { test, expect } = require('@playwright/test')
const exp = require('constants')
let id =
    //API ==> Application programing interface

    //Create 
    //Update 
    //Retrive 
    //Delete 
    //CRUD opretions 

    //GET ==> information retrive
    //POST ==> Create
    //PUT ==> Update
    //Delete ==> delete info 

    //URL 
    //https://reqres.in/api/users   ?page=2
    //BaseURl                        query para
    //https://reqres.in/api/users    /2
    //BaseURl                       PathPara

    test('Verify API GET REQUEST', async ({ request }) => {
        let req = await request.get('https://reqres.in/api/users?page=2')
        // console.log(req)
        console.log(await req.status())
        console.log(await req.json())
        let res = await req.json()
        console.log(await res.total)
        console.log(res.data[0].first_name)
        console.log(res.data[1].last_name)

        expect(res.page).toBe(2)
        expect(res.per_page).toBe(6)
        expect(req.status()).toBe(200)


    })

test.only('vrify API POST REQUEST', async ({ request }) => {
    let req = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "Anjali",
            "job": "Teacher"
        }
    })
    // console.log(await req)
    console.log(await req.json())
    let res2 = await req.json()
    console.log(await res2)
    console.log(await req.status())
    expect(res2.name).toBe('Anjali')
    expect(res2.job).toBe('Teacher')
    expect(req.status()).toBe(201)
    id = await res2.id

    console.log(id)

})

test.only('verify API PUT REQUEST', async ({ request }) => {
    // await console.log(id)
    // console.log(id)
    let req3 = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "Siya",
            "job": "Police"
        }
    })
    console.log(await req3)
    console.log(req3.json())
    let res3 = await req3.json()
    console.log(res3)

    expect(req3.status()).toBe(200)
    expect(res3.name).toBe('Siya')
    expect(res3.job).toBe('Police')


})