import type {WrapperProps} from '@docusaurus/types';
import DocItemFooterOriginal from '@theme-original/DocItem/Footer';
import type DocItemFooterType from '@theme/DocItem/Footer';

type Props = WrapperProps<typeof DocItemFooterType>;

export default function DocItemFooter(props: Props): JSX.Element {
  return (
    <>
      <DocItemFooterOriginal {...props} />
      <div className="doc-still-stuck">
        Still stuck? Use the chat below or{' '}
        <a href="https://advantagelabs.ai/contact">contact us</a>.
      </div>
    </>
  );
}
