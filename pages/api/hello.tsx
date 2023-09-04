import { NextApiRequest, NextApiResponse } from 'next'

const apiRequest = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

export default apiRequest
