import './Auth.css';

export default function Signup() {
  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form className="auth-form">
        <label>
          이메일
          <input type="email" placeholder="이메일 입력" required />
        </label>
        <label>
          아이디
          <input type="id" placeholder="아이디 입력" required />
        </label>
        <label>
          비밀번호
          <input type="password" placeholder="비밀번호 입력" required />
        </label>
        <label>
          비밀번호 확인
          <input type="password" placeholder="비밀번호 재입력" required />
        </label>
        <button type="submit" className="auth-button">
          회원가입
        </button>
      </form>
    </div>
  );
}
