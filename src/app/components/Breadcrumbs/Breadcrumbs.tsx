const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: string[] }) => (
  <div>
    <nav aria-label="Breadcrumbs">
      <ol role="list" className="flex align-middle">
        <li>
          <div>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7504 14H8.16702M8.09648 14.2429L6.15071 20.0552C5.99785 20.5118 5.92142 20.7401 5.97627 20.8807C6.0239 21.0028 6.1262 21.0954 6.25244 21.1306C6.3978 21.1712 6.61736 21.0724 7.05647 20.8748L20.9827 14.608C21.4113 14.4151 21.6256 14.3187 21.6918 14.1847C21.7494 14.0683 21.7494 13.9317 21.6918 13.8154C21.6256 13.6814 21.4113 13.585 20.9827 13.3921L7.05161 7.12313C6.61383 6.92612 6.39493 6.82762 6.24971 6.86803C6.1236 6.90312 6.0213 6.99544 5.97351 7.11731C5.91847 7.25764 5.99408 7.48545 6.14531 7.94108L8.09702 13.8213C8.12299 13.8996 8.13598 13.9387 8.14111 13.9787C8.14565 14.0142 8.14561 14.0502 8.14097 14.0857C8.13574 14.1257 8.12265 14.1648 8.09648 14.2429Z"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {breadcrumbs.map((value) => (
          <li key={value}>
            <div className="flex align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>

              <span>{value}</span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Breadcrumbs;
