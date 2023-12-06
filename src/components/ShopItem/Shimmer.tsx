import Skeleton from "@/components/Skeleton";

import styles from "./styles.module.css";

export function ShopItemCardShimmer() {
  return (
    <div className="card card-shop">
      <div className="banner">
        <Skeleton className={styles["banner--image"]} />
      </div>
      <div className="card-body">
        <Skeleton className={styles["display--name"]} />

        <div className="d-flex align-items-center justify-content-end">
          <div className="d-flex flex-column mr-3">
            <Skeleton className={styles["regular--price--text"]} />
            <Skeleton className={styles["price--text"]} />
          </div>
          <Skeleton className={styles["price--icon"]} />
        </div>
      </div>
    </div>
  );
}
