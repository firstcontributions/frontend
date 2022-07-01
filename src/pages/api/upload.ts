// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import FormData from 'form-data'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const inComingForm = new formidable.Formidable()
  inComingForm.parse(req, (err, fields, files) => {
    const form = new FormData()
    form.append('source', fs.createReadStream(files.source.filepath))
    if (!!err) {
      res.status(400).json({
        success: 0,
      })
    } else {
      fetch(
        'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
        {
          method: 'POST',
          body: form,
          headers: form.getHeaders(),
        }
      ).then((response) => {
        response.json().then((data) => {
          res.status(200).json({
            success: 1,
            file: {
              url: data.image.url,
            },
          })
        })
      })
    }
  })
}
