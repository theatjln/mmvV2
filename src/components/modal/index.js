// overlay
import Wrapper from "../wrapper";

export default function Modal({ children }) {
  return (
    <div className="modal flex flex-col w-5/6 lg:w-1/3 md:w-1/2">
      <Wrapper style="modal-form-wrapper">{children}</Wrapper>
    </div>
  );
}
