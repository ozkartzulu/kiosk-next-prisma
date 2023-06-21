
import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    // get orders
    if (req.method === 'GET') {
        try {
            const allOrders = await prisma.ordering.findMany({
                where: {
                    state: false
                }
            })
            res.status(200).json(allOrders)
        } catch (error) {
            console.log(error)
        }
    }


    // create order
    if (req.method === 'POST') {
        const orders = await prisma.ordering.create({
            data: {
                name: req.body.name,
                total: req.body.total,
                order: req.body.order,
                date: req.body.date
            }
        })
        res.status(200).json(orders)
    }

}