import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { TreeDeciduous, Users, GitBranch } from 'lucide-react';

type FamilyTree = {
  id: string;
  title: string;
  buriedCount: string;
  content: string;
};

const familyTrees: FamilyTree[] = [
  {
    id: 'white-wailes',
    title: 'Thomas White & Ann Wailes',
    buriedCount: '33 burials and connected relatives',
    content: `- ❌ Thomas White Sr
  - married ✅ Ann Wailes White
- Their children:
  - ✅ Thomas White Jr
    - married ✅ Mary Robinson Fawcett White
    - children:
      - ✅ Jane White
      - ✅ William White
    - later descendant:
      - ✅ Annie White Collins
        - granddaughter of Ann Wailes White through Thomas Jr / Mary Robinson Fawcett
        - married ✅ William Denis Collins
          - collateral relative: ✅ James Collins = brother of William Denis Collins
  - ✅ John White
  - ✅ Joseph White
    - married ✅ Rosena Dowswell White
    - children:
      - ✅ infant daughter White
      - ✅ Joseph White (child)
      - ✅ John White
        - married ❌ Sarah Matilda Fisher
  - ✅ Elizabeth White Duncan
    - married ✅ John Duncan Sr
    - children:
      - ✅ Lucinda Duncan Stainton
        - married ❌ William Henry Stainton
        - child:
          - ✅ Elizabeth Caroline Stainton
      - ✅ Isabella Duncan Watson
        - married ❌ Mr. Watson
      - ✅ Mary Duncan Brumwell
        - married ✅ William Brumwell
        - William Brumwell’s parents:
          - ❌ Jacob Brumwell (older)
          - ❌ Frances Fawcett Brumwell
        - children:
          - ✅ Robert Brumwell
          - ✅ John Wesley Brumwell
          - ✅ Jacob Brumwell
            - married ✅ Rachel Ann Swallow Brumwell
            - child:
              - ✅ Gladyous Brumwell
            - Rachel’s brothers:
              - ✅ Alfred Swallow
              - ✅ Joseph Swallow
            - later descendant / connected relative:
              - ✅ Joanne Greig
      - ✅ James Duncan
        - married ✅ Eliza Lennox Duncan
        - child:
          - ✅ Elizabeth Ethel Duncan Carroll
            - married ❌ James Carroll
      - ❌ Johnson Duncan
        - child:
          - ✅ Sarah Duncan`,
  },
  {
    id: 'post-woodruff',
    title: 'Jordan Post & Malinda Woodruff',
    buriedCount: '20 burials and connected relatives',
    content: `- ✅ Jordan Post IV
  - married ✅ Malinda Woodruff Post
- Their children:
  - ✅ Maria Clarissa Post Closson
    - married ✅ Stephen Closson
    - children:
      - ✅ Stephen Henry Closson
      - ✅ Paulina Closson
      - ✅ Cedric W. Closson
      - ❌ Benjamin Franklin Closson
        - not in the cemetery
        - child:
          - ❌ Una Jean Closson Morrish
            - granddaughter of Stephen and Maria Clarissa through Benjamin Franklin Closson
            - married ❌ William John Morrish
            - children:
              - ✅ William Morrish
              - ❌ Ken Morrish
  - ❌ Melinda Post Cornell
    - married ✅ Calvin Cornell
    - children:
      - ❌ Desdemona Cornell Woodruff
        - married ❌ Lorne Laren Woodruff
        - child:
          - ✅ Annie Electa Woodruff
      - ✅ Susan Emily Cornell Hawkins
        - married ✅ Nelson Hawkins
        - children:
          - ✅ Augusta Hawkins Douglas
          - ✅ Elma Elizabeth Hawkins Cole
            - married ✅ Robert Edgar Cole
          - ❌ Albert Hawkins
            - child:
              - ✅ Alice Emily Hawkins
      - ❌ Sarah Jane Cornell
        - married ❌ David Thomas Adams
      - possible later spouse of Calvin:
        - ❌ Elizabeth Stuart (? listed as mother of Susan Emily in notes)
  - ❌ Jordan Post V
    - married ✅ Elmira Kerr Post
    - children:
      - ✅ Malinda Post
      - ✅ William Post
- Associated but not kin:
  - ✅ Harvey W. Keeler listed as family friend
  - ❌ Orson Keeler
  - ❌ Mary Keeler`,
  },
  {
    id: 'karr-woodruff',
    title: 'John Karr & Elizabeth Woodruff',
    buriedCount: '11+ burials and connected relatives',
    content: `- ✅ John Karr
  - married ✅ Elizabeth “Betsey” Woodruff Karr
- Their children:
  - ✅ Elmira Kerr Post
    - married ❌ Jordan Post V
    - children:
      - ✅ Malinda Post
      - ✅ William Post
  - ✅ Carlton Luther Kerr Sr
    - married ❌ Lorraine Pencile
    - children:
      - ✅ Sarah Jane Kerr Reed
        - married ✅ Nahum Goodwin Reed
        - children:
          - ✅ Rhoda Olive Reed
          - ✅ Lorne Garfield Reed
          - ❌ Jessie Lorraine Reed
      - ❌ Mary Kerr Bennett
        - married ❌ William Bennett
        - child:
          - ✅ Alfretta Bennett
  - ❌ Almira Kerr
  - ❌ Beulah/Louisa Kerr
    - married ❌ Elijah Adams
  - ❌ Sylvester Kerr
  - ? Phoebe Ann Kerr Briggs
    - probably married ❌ David Briggs
    - probable children:
      - ✅ Elizabeth Briggs
      - ✅ John Briggs
  - ? Elizabeth Box
    - probably married ❌ William Henry Box`,
  },
  {
    id: 'taylor-clark',
    title: 'John Taylor & Mary Clark',
    buriedCount: '11+ burials and connected relatives',
    content: `- ✅ John Taylor
  - married ✅ Mary Clark Taylor
- Their children:
  - ✅ Fanny Taylor Collins
    - married ✅ Jabez Collins
  - ✅ Mary Taylor Brander
  - ✅ Mark Taylor
    - married ✅ Margaret Secord Taylor
  - ❌ John Taylor Jr
    - child:
      - ✅ Sarah Taylor
  - ❌ Robert Taylor
    - married ❌ Frances Dixon Taylor
    - children:
      - ✅ Mary Taylor
      - ✅ John Taylor
  - ❌ William Taylor
  - ❌ Sarah Taylor Annis
    - married ❌ Andrew Annis
  - ❌ James Clark Taylor
- Uncertain later descendant:
  - ✅ Jessie Bell Taylor (? exact placement unclear)`,
  },
  {
    id: 'adams-webster',
    title: 'Thomas Adams & Ann Webster',
    buriedCount: '8 burials and connected relatives',
    content: `- ✅ Thomas Adams
  - first wife: ❌ Sarah Mills
  - second wife: ❌ Ann Nancy Webster Adams
- Children:
  - ✅ Henry Adams
    - married ✅ Elizabeth Karr Adams
  - ❌ Edward Adams
    - married ✅ Anna Hadley Adams
  - ❌ Thomas Adams Jr
    - married ❌ Elizabeth Warr Adams
    - child:
      - ❌ David Thomas Adams
        - married ❌ Sarah Jane Cornell
  - ❌ James Adams Sr
    - possibly married ? Nancy Ann Ellis
  - ❌ Elijah Adams
    - married ❌ Beulah/Louisa Karr
  - ❌ Sarah Jane Adams
- Hadley / Ellis side attached through Anna Hadley:
  - ❌ Elizabeth Isabelle Hadley Ellis
    - married ✅ Frederick Ellis
    - children:
      - ✅ William E. Ellis
      - ✅ Margaret Ann Ellis
  - ? Mary Hadley / Mary Doherty
    - likely same person as ✅ Mary Doherty
    - married ❌ John Doherty`,
  },
  {
    id: 'fisher-snowdon',
    title: 'Joseph Fisher & Elizabeth Snowdon',
    buriedCount: '5 burials and connected relatives',
    content: `- ❌ John Fisher I
  - married ❌ Elizabeth Chapman Fisher
  - child:
    - ✅ Joseph Fisher
      - married ❌ Elizabeth Snowdon Fisher
      - children:
        - ✅ Ruth Fisher Higgins
        - ✅ John Fisher II
          - married ✅ Susan Bellchambers Fisher
          - children:
            - ✅ Thomas B. Fisher
            - ❌ Joseph Fisher
            - ❌ Hannah Fisher
            - ❌ William Fisher
            - ❌ John Fisher
            - ❌ Amelia Fisher
- Collateral branch:
  - ❌ William Fisher = Joseph’s brother
    - child:
      - ❌ John Fisher
        - married ❌ Elizabeth Post`,
  },
  {
    id: 'lanktree',
    title: 'Henry & Eleanor Lanktree',
    buriedCount: '3 burials and connected relatives',
    content: `- ❌ Henry Lanktree
  - married ❌ Eleanor Lanktree
- Children buried here:
  - ✅ Edith Lanktree
  - ✅ George Roberts Lanktree
  - ✅ James Liam Lanktree
- Other children named in kinship text:
  - ❌ John Lanktree
  - ❌ Adam H. Lanktree
  - ❌ Sophrona Lanktree`,
  },
  {
    id: 'fawcett-armstrong',
    title: 'William Fawcett & Jane Armstrong',
    buriedCount: '3 burials and connected relatives',
    content: `- ✅ William Fawcett
  - married ✅ Jane Armstrong Fawcett
- Their children:
  - ✅ Elizabeth Fawcett Wallace
  - ✅ Mary Robinson Fawcett White
    - married ✅ Thomas White Jr
    - children:
      - ✅ Jane White
      - ✅ William White
  - ❌ William Armstrong Fawcett
  - ❌ Isaac Fawcett
  - ❌ John G. Fawcett
  - ? Jane Fawcett
  - ❌ Frances Fawcett
    - married ❌ Jacob Brumwell (older)
    - child:
      - ✅ William Brumwell
        - later married ✅ Mary Duncan Brumwell
- Grandson mentioned:
  - ❌ William Henry Fawcett
    - married ❌ Susanah Chapman`,
  },
  {
    id: 'stainton',
    title: 'Richard & Caroline Stainton',
    buriedCount: '3 burials and connected relatives',
    content: `- ✅ Richard Stainton
  - married ✅ Caroline Howell Stainton
- Children:
  - ✅ Louisa Stainton
  - ❌ William Henry Stainton
    - married ✅ Lucinda Duncan Stainton
    - child:
      - ✅ Elizabeth Caroline Stainton
  - ❌ Elizabeth Stainton
  - ❌ Amelia Stainton
  - ❌ Charles Howell Stainton
  - ❌ John Thomas Stainton`,
  },
  {
    id: 'huston',
    title: 'Huston Family',
    buriedCount: '2 burials and connected relatives',
    content: `- ✅ Sarah Huston Sr
- Her children:
  - ✅ David Huston
  - ❌ Sarah Huston Jr
- Attached non-kin / household link in notes:
  - ❌ David Thomas Adams lived in the household and later inherited property`,
  },
  {
    id: 'rawson',
    title: 'William Rawson',
    buriedCount: '2 burials and connected relatives',
    content: `- ✅ William Rawson
  - married ❌ Mary Thomson Rawson
- Children:
  - ✅ Thomas Rawson
  - ❌ Hannah Rawson
  - ❌ William Rawson
  - ❌ Mary Ellen Rawson
  - ❌ Thomas Andrew Rawson
  - ❌ Ursly Margaret Rawson`,
  },
  {
    id: 'munday',
    title: 'Alfred Storey Munday',
    buriedCount: '3 burials and connected relatives',
    content: `- ✅ Alfred Storey Munday
  - married ✅ Marian Powley Munday
  - child not named here, but:
    - ✅ Colin Barron = son-in-law`,
  },
  {
    id: 'cowan',
    title: 'Cowan Family',
    buriedCount: '2 burials and probable relatives',
    content: `- ? Robert Cowan
  - married ? Jane Cowan
  - probable children:
    - ✅ Jane Cowan
    - ✅ Mary Cowan
    - ? Isabella Ann Cowan`,
  },
  {
    id: 'armstrong',
    title: 'William Armstrong',
    buriedCount: '2 burials and connected relatives',
    content: `- ✅ William Armstrong
  - married ✅ Ann Armstrong
  - brother:
    - ❌ Thomas Armstrong`,
  },
  {
    id: 'littlejohns',
    title: 'Littlejohns',
    buriedCount: '2 burials',
    content: `- ✅ Edward Littlejohns
  - married ✅ Ann Knight Littlejohns`,
  },
  {
    id: 'chapman',
    title: 'Chapman / Armstrong / Fawcett overlap',
    buriedCount: '1 burial and connected relatives',
    content: `- ❌ Jesse Chapman
  - married ❌ Almira Susanah Secord Chapman
  - child:
    - ✅ Mary Jane Chapman
- Sister line mentioned:
  - ❌ Susanah Chapman
    - married ❌ William Henry Fawcett
- Maternal line noted:
  - ❌ Joseph Secord
  - ❌ Laura Armstrong
    - later remarried ❌ Thomas Armstrong`,
  },
  {
    id: 'may-morrish',
    title: 'John May (Morrish connection)',
    buriedCount: '1 burial and connected relatives',
    content: `- ✅ John May
  - married ❌ Ann Morrish May
- Notes say Ann Morrish was great-great-aunt of William Morrish in the Post / Closson line`,
  },
  {
    id: 'pearce',
    title: 'Pearce',
    buriedCount: '1 burial and connected relatives',
    content: `- ❌ John Pearce
  - married ❌ Susan Pearce
  - child:
    - ✅ William Pearce`,
  },
  {
    id: 'steel',
    title: 'Steel',
    buriedCount: '1 burial and connected relatives',
    content: `- ❌ William Steel
  - married ✅ Ann Steel`,
  },
  {
    id: 'greenfield',
    title: 'Greenfield',
    buriedCount: '1 burial',
    content: `- ✅ John Greenfield
  - possibly actually William Greenfield
  - no reliable family ties established from these columns alone`,
  },
];

const laterBurials = `- ✅ John Spillsbury
  - married ✅ Shirley Morrison Spillsbury
- ✅ Gord Grieveson
  - married ✅ Joyce Bodnar Grieveson
- ✅ Ron Pratt
- ✅ Sophia Walker
- ✅ Douglas R. Murphy
  - married ✅ Georgina M. Galbraith Murphy`;

const crossClusterLinks = `- Mary Robinson Fawcett White links Fawcett ↔ White
- Elmira Kerr Post links Karr ↔ Post
- Elizabeth Karr Adams and Beulah/Louisa Kerr + Elijah Adams link Karr ↔ Adams
- David Thomas Adams + Sarah Jane Cornell link Adams ↔ Post
- Lucinda Duncan Stainton / Elizabeth Caroline Stainton link White ↔ Stainton
- Mary Duncan + William Brumwell link White/Duncan ↔ Brumwell
- Frances Fawcett + Jacob Brumwell (older) link Fawcett ↔ Brumwell
- Rachel Ann Swallow Brumwell links Swallow ↔ Brumwell
- John White + Sarah Matilda Fisher link White ↔ Fisher
- John Fisher + Elizabeth Post link Fisher ↔ Post
- Susanah Chapman + William Henry Fawcett link Chapman ↔ Fawcett
- Laura Armstrong / Thomas Armstrong / William Armstrong create an Armstrong ↔ Chapman connection
- Ann Morrish May connects May ↔ Morrish`;

const legend = `✅ buried in cemetery
❌ mentioned in kinship / notes but not buried here
? uncertain / probable only`;

export function FamilyTrees() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-2">Family Trees</h1>
        <p className="text-black mb-8">
          Highland Creek Wesleyan Methodist Cemetery, Scarborough — researched family clusters
          drawn from the burial roster's kinship, notes, and kinship cluster fields.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreeDeciduous className="size-5 text-green-600" />
              Reading Key
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-700 font-sans">
              {legend}
            </pre>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {familyTrees.map((family) => (
            <Card key={family.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TreeDeciduous className="size-5 text-green-600" />
                  {family.title}
                </CardTitle>
                <p className="text-sm text-black">{family.buriedCount}</p>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800 font-sans">
                  {family.content}
                </pre>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="size-5 text-green-600" />
                Unconnected or Later Paired Burials
              </CardTitle>
              <p className="text-sm text-black">
                Later burials that read as linked pairs, but not as major pioneer kinship clusters
              </p>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-800 font-sans">
                {laterBurials}
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="size-5 text-blue-600" />
                Important Cross-Cluster Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="whitespace-pre-wrap text-sm leading-6 text-gray-700 font-sans">
                {crossClusterLinks}
              </pre>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Users className="size-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Research Notes</h3>
                  <p className="text-sm text-gray-700">
                    These trees are presented as research outlines rather than fully normalized genealogical
                    databases. They preserve uncertainty where the burial roster marks a relationship as
                    likely, possible, or unconfirmed, and they include both buried individuals and close
                    relatives named in the notes when those connections help explain family clusters.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}