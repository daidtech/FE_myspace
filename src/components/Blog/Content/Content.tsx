import React from 'react';
import styles  from './Content.module.scss';
import Comments from 'src/components/share/Comments/Comments';

export default function Content() {
  return (
    <section className='my-5'>
      <p>Tường Linh Thứ tư, 3/1/2024 09:11 (GMT+7)</p>
      <p className={styles.shortDescription}>
        HLV Aleksandar Jankovic trừng phạt dàn sao tuyển Trung Quốc sau hai thất bại liên tiếp chỉ trong vòng 3 ngày.
      </p>
      <div className={styles.content}>
        <img src="https://photo.znews.vn/w1920/Uploaded/bpivpawv/2024_01_03/trungquoc.jpeg" alt="" />
        <p className={styles.imageDescription}>HLV Jankovic không hài lòng với màn trình diễn từ tuyển Trung Quốc.</p>
        <p>Sau buổi tập sáng sớm, tuyển Trung Quốc có thêm một buổi tập khá nặng vào lúc 10h30. Đến chiều, tuyển Trung Quốc có thêm một buổi họp kỹ thuật để khép lại ngày tập luyện được xem là "ác mộng" với nhiều cầu thủ.</p>
        <p>HLV Jankovic khẳng định dàn sao tuyển Trung Quốc chơi dưới sức trong thời gian qua. Chiến lược gia người Serbia muốn các học trò nhìn nhận lại hai kết quả đáng xấu hổ trước Oman (thua 0-2) và Hong Kong vừa qua.</p>
        <p>Đây là lần đầu tiên sau 29 năm, tuyển Trung Quốc mới lại thua Hong Kong (Trung Quốc). Trên BXH FIFA tháng 12/2023, tuyển Trung Quốc đứng thứ 79 trong khi tuyển Hong Kong chỉ xếp thứ 150.</p>
        <img src="https://photo.znews.vn/w1920/Uploaded/bpivpawv/2024_01_03/1000.jpg" alt="" />
      </div>
      <Comments />
    </section>
  );
}