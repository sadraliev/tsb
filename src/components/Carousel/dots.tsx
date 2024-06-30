import { cn } from "@/lib";

interface DotsProps {
  currentSlide: number;
  handleNext: () => void;
}

export const Dots: React.FC<DotsProps> = ({ handleNext, currentSlide }) => {
  return (
    <div className="parallax-controllers z-40">
      <div className="button-controller">
        <button type="button" onClick={handleNext}>
          <svg
            className={cn("z-20 roadline")}
            width="67"
            height="18"
            viewBox="0 0 67 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.1389 14.4H48.3889C48.3889 6.45984 41.7097 0 33.5 0C31.7148 0 30.01 0.32112 28.4221 0.88056L25.1056 2.5164C21.1891 5.11344 18.6111 9.46944 18.6111 14.4H1.86111C0.833033 14.4 0 15.2057 0 16.2C0 17.1943 0.833033 18 1.86111 18H20.4722H46.5278H65.1389C66.167 18 67 17.1943 67 16.2C67 15.2057 66.167 14.4 65.1389 14.4ZM29.7778 14.4C29.7778 12.415 31.4476 10.8 33.5 10.8C35.5524 10.8 37.2222 12.415 37.2222 14.4H29.7778ZM40.9444 14.4C40.9444 10.4299 37.6049 7.2 33.5 7.2C29.3951 7.2 26.0556 10.4299 26.0556 14.4H22.3333C22.3333 8.44488 27.3427 3.6 33.5 3.6C39.6573 3.6 44.6667 8.44488 44.6667 14.4H40.9444Z"
              fill="#FF906D"
            />
            <path
              d="M65.1389 14.4H48.3889C48.3889 6.45984 41.7097 0 33.5 0C31.7148 0 30.01 0.32112 28.4221 0.88056L25.1056 2.5164C21.1891 5.11344 18.6111 9.46944 18.6111 14.4H1.86111C0.833033 14.4 0 15.2057 0 16.2C0 17.1943 0.833033 18 1.86111 18H20.4722H46.5278H65.1389C66.167 18 67 17.1943 67 16.2C67 15.2057 66.167 14.4 65.1389 14.4ZM29.7778 14.4C29.7778 12.415 31.4476 10.8 33.5 10.8C35.5524 10.8 37.2222 12.415 37.2222 14.4H29.7778ZM40.9444 14.4C40.9444 10.4299 37.6049 7.2 33.5 7.2C29.3951 7.2 26.0556 10.4299 26.0556 14.4H22.3333C22.3333 8.44488 27.3427 3.6 33.5 3.6C39.6573 3.6 44.6667 8.44488 44.6667 14.4H40.9444Z"
              fill="#FF906D"
            />
            <path
              d="M46 15H19L23.4082 6.81818L30.0204 3H37.7347L44.898 7.90909L46 15Z"
              fill="#FF906D"
            />
          </svg>
          <svg
            className={cn("z-10", "lever", "left")}
            width="16"
            height="65"
            viewBox="0 0 16 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.42509 64.6112L6.21982 23.9894L3.91499 23.901C3.30363 23.8771 2.70744 23.5977 2.25549 23.1237C1.80388 22.6485 1.53562 22.0192 1.50795 21.372L0.688331 1.84498C0.63142 0.496586 2.64065 -0.205362 3.915 -0.15405L12.1077 -0.154022C12.7191 -0.130168 13.3153 0.149285 13.7672 0.623202C14.2188 1.09842 14.4871 1.72777 14.5147 2.3749L15.3352 21.9016C15.3746 22.8487 14.8998 23.6511 14.1721 24.0271C13.8643 24.1861 13.511 24.2688 13.133 24.2544L10.829 24.1655L11.427 64.5556L6.42509 64.6112ZM10.6238 19.285L10.009 4.63974L5.4002 4.46237L6.01491 19.1077L10.6238 19.285Z"
              fill="black"
            />
            <path
              d="M6.42509 64.6112L6.21982 23.9894L3.91499 23.901C3.30363 23.8771 2.70744 23.5977 2.25549 23.1237C1.80388 22.6485 1.53562 22.0192 1.50795 21.372L0.688331 1.84498C0.63142 0.496586 2.64065 -0.205362 3.915 -0.15405L12.1077 -0.154022C12.7191 -0.130168 13.3153 0.149285 13.7672 0.623202C14.2188 1.09842 14.4871 1.72777 14.5147 2.3749L15.3352 21.9016C15.3746 22.8487 14.8998 23.6511 14.1721 24.0271C13.8643 24.1861 13.511 24.2688 13.133 24.2544L10.829 24.1655L11.427 64.5556L6.42509 64.6112ZM10.6238 19.285L10.009 4.63974L5.4002 4.46237L6.01491 19.1077L10.6238 19.285Z"
              fill="black"
            />
            <path
              d="M6.42509 64.6112L6.21982 23.9894L3.91499 23.901C3.30363 23.8771 2.70744 23.5977 2.25549 23.1237C1.80388 22.6485 1.53562 22.0192 1.50795 21.372L0.688331 1.84498C0.63142 0.496586 2.64065 -0.205362 3.915 -0.15405L12.1077 -0.154022C12.7191 -0.130168 13.3153 0.149285 13.7672 0.623202C14.2188 1.09842 14.4871 1.72777 14.5147 2.3749L15.3352 21.9016C15.3746 22.8487 14.8998 23.6511 14.1721 24.0271C13.8643 24.1861 13.511 24.2688 13.133 24.2544L10.829 24.1655L11.427 64.5556L6.42509 64.6112ZM10.6238 19.285L10.009 4.63974L5.4002 4.46237L6.01491 19.1077L10.6238 19.285Z"
              fill="#FF906D"
            />
          </svg>
        </button>
      </div>

      <div className="radio-controller">
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 0 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 1 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn("radio-btn ", currentSlide === 2 ? "active" : "")}
          />
        </div>
        <div>
          <button
            type="button"
            className={cn(
              "radio-btn remove-line",
              currentSlide === 3 ? "active" : ""
            )}
          />
        </div>
      </div>
    </div>
  );
};