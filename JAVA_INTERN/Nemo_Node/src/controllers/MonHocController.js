const MonHocMySqlRepository = require('../repositories/MonHocMySqlRepository')
const repo = new MonHocMySqlRepository()
class MonHocController {
  async getAll(req, res) {
    try{
    const data = await repo.findAll()
    res.json(data)
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server' })
    }
  }
  async create(req, res) {
    await repo.save(req.body)
    res.status(200).json({ message: 'Đã thêm' })
  }
  async getById(req, res) {
    const maMon = req.params.maMon
    const data = await repo.findbyId(maMon)
    res.status(200).json(data)
  }
  async delete(req, res) {
    const maMon = req.params.maMon
    await repo.delete(maMon)
    res.status(200).json({ message: 'Đã xóa' })
  }
  async update(req, res) {
    const maMon = req.params.maMon
    await repo.update(maMon, req.body)
    res.status(200).json({ message: 'Đã cập nhật' })
  }
}
module.exports = new MonHocController()
