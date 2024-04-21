import ContactList from "./Catalog"
import c from './catalog.module.css'

export default function CatalogPage() {
  return (
    <>
      <div className={c.catalogText}>
        <h2>Список товарів</h2>
      </div>
      <div className={c.catalogList}>
        <ContactList/>
      </div>
    </>
  )
}
