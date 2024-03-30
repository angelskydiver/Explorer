import Link from 'next/link';
import { ListItemProps } from './Footer.type';

function ListIcon(props: ListItemProps) {
  const { openInNewTab, location, icon: Icon } = props;
  return (
    <li className="item-center flex pb-2.5 text-12 md:text-25 md:font-medium	leading-[0.8rem] text-neutral-200 md:text-[25px] md:leading-5	">
      <Link
        target={openInNewTab ? '_blank' : '_self'}
        rel={openInNewTab ? 'noreferrer' : 'none'}
        className={Icon ? 'ml-1' : ''}
        href={location}>
        {Icon && <Icon className="text-primary-500" />}
      </Link>
    </li>
  );
}

export default ListIcon;
