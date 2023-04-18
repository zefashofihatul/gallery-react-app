import './style/tab.css';

export default function Tab({ children, active, onClick }) {
  return (
    <>
      <div onClick={onClick} className={`tab-main ${active ? 'active' : ''}`}>
        <span className="tab-text">{children}</span>
      </div>
    </>
  );
}
