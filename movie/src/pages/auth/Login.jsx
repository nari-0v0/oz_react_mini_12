import './Auth.css';

export default function Login() {
  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form className="auth-form">
        <label>
          아이디
          <input type="id" placeholder="아이디 입력" required />
        </label>
        <label>
          비밀번호
          <input type="password" placeholder="비밀번호 입력" required />
        </label>
        <button type="submit" className="auth-button">
          로그인
        </button>
      </form>
    </div>
  );
}
