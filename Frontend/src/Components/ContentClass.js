import React from "react";

 function ContentClass(){
    
     return (
        <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card shadow mb-4">
              {/* Card Header - Dropdown */}
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">D17_TH01</h6>
              </div>
              {/* Card Body */}
              <div className="card-body">
                <div className="chart-area">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>MSSV</th>
                        <th>Họ Tên</th>
                        <th>Lớp</th>
                        <th>Ngày Sinh</th>
                        <th>Địa Chỉ</th>
                        <th>Image</th>
                        <th>Trạng Thái</th>
                        <th>1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>DH51700238</td>
                        <td>Nguyễn Hữu Thắng</td>
                        <td>D17_TH01</td>
                        <td>26/03/1999</td>
                        <td>180 Cao Lỗ</td>
                        <td>NULL</td>
                        <td>Đang học</td>
                        <td>Đang học</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>DH51700238</td>
                        <td>Nguyễn Hữu Thắng</td>
                        <td>D17_TH01</td>
                        <td>26/03/1999</td>
                        <td>180 Cao Lỗ</td>
                        <td>NULL</td>
                        <td>Đang học</td>
                        <td>Đang học</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>DH51700238</td>
                        <td>Nguyễn Hữu Thắng</td>
                        <td>D17_TH01</td>
                        <td>26/03/1999</td>
                        <td>180 Cao Lỗ</td>
                        <td>NULL</td>
                        <td>Đang học</td>
                        <td>Đang học</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     )
 }
 export default ContentClass