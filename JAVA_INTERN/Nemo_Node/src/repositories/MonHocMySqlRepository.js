const pool = require('../config/db')
class MonHocMySqlRepository {
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM mon_hoc')
    return rows
  }
  async save(mh) {
    const sql = `
      INSERT INTO mon_hoc VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      ten_mon=?, so_tin_chi=?, so_luong_sinh_vien=?, loai=?  `
    await pool.query(sql, [
      mh.maMon,
      mh.tenMon,
      mh.soTinChi,
      mh.soLuongSinhVien,
      mh.loai,
      mh.tenMon,
      mh.soTinChi,
      mh.soLuongSinhVien,
      mh.loai
    ])
  }
  async findbyId(maMon) {
    const [rows] = await pool.query('SELECT * FROM mon_hoc WHERE ma_mon = ?', [maMon])
    return rows[0]
  }
  async delete(maMon) {
    const [rows] = await pool.query('DELETE FROM mon_hoc WHERE ma_mon = ?', [maMon])
    return rows
  }
  async update(maMon, monHoc) {
    const sql = `UPDATE mon_hoc SET ten_mon=?, so_tin_chi=?, so_luong_sinh_vien=?, loai=? WHERE ma_mon=?`
    await pool.query(sql, [
      monHoc.tenMon,
      monHoc.soTinChi,
      monHoc.soLuongSinhVien,
      monHoc.loai,
      maMon
    ])
  }
}
module.exports = MonHocMySqlRepository
