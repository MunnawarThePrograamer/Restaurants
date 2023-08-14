import styled from "styled-components";

const Title = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  flex-shrink: 0;
`;
const Tab = styled.div`
  flex: 1;
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-300);
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
`;
const TabGroup = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0px var(--padding-xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: center;
`;
const Title3 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Subtitle = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 16px;
  color: var(--color-gray-100);
`;
const Text1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title4 = styled.div`
  position: relative;
  line-height: 16px;
`;
const Icon = styled.img`
  position: relative;
  width: 12px;
  height: 12px;
`;
const Button = styled.div`
  border-radius: var(--br-9xs);
  border: 1px solid var(--color-black);
  display: flex;
  flex-direction: row;
  padding: var(--padding-10xs) var(--padding-9xs) var(--padding-10xs)
    var(--padding-5xs);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-11xs);
  font-size: var(--font-size-xs);
`;
const SectionTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-base) var(--padding-xs) 0px;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--font-size-lg);
`;
const TopIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 24px;
  flex-shrink: 0;
`;
const Title5 = styled.div`
  flex: 1;
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const Icon1 = styled.div`
  position: relative;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
const IconButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-base);
`;
const Content = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) var(--padding-5xs) var(--padding-xs)
    var(--padding-base);
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const TopBar = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-xl);
`;
const Title6 = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  top: calc(50% - 8px);
  left: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
`;
const Text11 = styled.div`
  position: relative;
  line-height: 16px;
  font-weight: 500;
`;
const Tag = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xs) 0px var(--br-7xs) 0px;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: center;
  text-align: left;
`;
const Image1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  background-color: var(--color-gray-200);
`;
const ImageContainer = styled.div`
  align-self: stretch;
  height: 150px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Title7 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 16px;
`;
const IconButtons1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: center;
`;
const TextContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: var(--padding-5xs);
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: left;
  font-size: var(--font-size-base);
`;
const Card = styled.div`
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-300);
  box-sizing: border-box;
  width: 150px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Row = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const List = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-xs);
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Avatar1 = styled.div`
  position: relative;
  border-radius: var(--br-5xl);
  background-color: var(--color-gray-300);
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Title14 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 16px;
  font-weight: 500;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  flex-shrink: 0;
`;
const Avatar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const UserChild = styled.img`
  position: relative;
  width: 58.26px;
  height: 9.81px;
`;
const User = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xs);
`;
const Title15 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 20px;
  display: -webkit-inline-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
const IconButtons4 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  text-align: center;
  font-size: var(--font-size-base);
`;
const Card3 = styled.div`
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-200);
  width: 220px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: var(--padding-xs);
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: var(--gap-5xs);
`;
const List1 = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px var(--padding-xs);
  align-items: center;
  justify-content: center;
`;
const Icon21 = styled.div`
  position: relative;
  line-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
`;
const Title26 = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--font-size-3xs);
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 14px;
  flex-shrink: 0;
`;
const Tab3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--padding-9xs);
  align-items: center;
  justify-content: flex-start;
`;
const BottomNav = styled.div`
  align-self: stretch;
  background-color: var(--color-white);
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-xl);
`;
const PageRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-black);
  font-family: var(--font-roboto);
`;
const Page = () => {
  return (
    <PageRoot>
      <TabGroup>
        <Tab>
          <Title>Clothes</Title>
        </Tab>
        <Tab>
          <Title>Shoes</Title>
        </Tab>
        <Tab>
          <Title>Accessories</Title>
        </Tab>
      </TabGroup>
      <SectionTitle>
        <Text1>
          <Title3>Featured Products</Title3>
          <Subtitle>Check out our latest arrivals!</Subtitle>
        </Text1>
        <Button>
          <Title4>View All</Title4>
          <Icon alt="" src="/icon.svg" />
        </Button>
      </SectionTitle>
      <TopBar>
        <TopIcon alt="" src="/top.svg" />
        <Content>
          <Title5>Kids Shop</Title5>
          <IconButtons>
            <Icon1>😃</Icon1>
            <Icon1>🛒</Icon1>
          </IconButtons>
        </Content>
      </TopBar>
      <List>
        <Row>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>A cute t-shirt for boys</Title6>
                <Tag>
                  <Text11>New Arrival</Text11>
                </Tag>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Boys T-Shirt</Title7>
              <Title3>$19.99</Title3>
              <IconButtons1>
                <Icon1>❤️</Icon1>
                <Icon1>🔍</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>Stylish dress for girls</Title6>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Girls Dress</Title7>
              <Title3>$24.99</Title3>
              <IconButtons1>
                <Icon1>❤️</Icon1>
                <Icon1>🔍</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>Colorful sneakers for kids</Title6>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Kids Sneakers</Title7>
              <Title3>$29.99</Title3>
              <IconButtons1>
                <Icon1>❤️</Icon1>
                <Icon1>🔍</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
        </Row>
      </List>
      <SectionTitle>
        <Text1>
          <Title3>Customer Reviews</Title3>
          <Subtitle>Hear what our customers have to say</Subtitle>
        </Text1>
        <Button>
          <Title4>Write a Review</Title4>
          <Icon alt="" src="/icon.svg" />
        </Button>
      </SectionTitle>
      <List1>
        <Row>
          <Card3>
            <User>
              <Avatar>
                <Avatar1 />
                <Text1>
                  <Title14>Emma</Title14>
                </Text1>
              </Avatar>
              <UserChild alt="" src="/frame-427318817.svg" />
            </User>
            <Title15>Excellent quality and fast delivery!</Title15>
            <IconButtons4>
              <Icon1>✨</Icon1>
              <Icon1>🔗</Icon1>
            </IconButtons4>
          </Card3>
          <Card3>
            <User>
              <Avatar>
                <Avatar1 />
                <Text1>
                  <Title14>James</Title14>
                </Text1>
              </Avatar>
              <UserChild alt="" src="/frame-4273188171.svg" />
            </User>
            <Title15>My kids love their new clothes!</Title15>
            <IconButtons4>
              <Icon1>✨</Icon1>
              <Icon1>🔗</Icon1>
            </IconButtons4>
          </Card3>
        </Row>
      </List1>
      <SectionTitle>
        <Text1>
          <Title3>Recommended for You</Title3>
        </Text1>
        <Button>
          <Title4>See All</Title4>
          <Icon alt="" src="/icon.svg" />
        </Button>
      </SectionTitle>
      <List>
        <Row>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>Adorable pajamas for toddlers</Title6>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Kids Pajamas</Title7>
              <Title3>$14.99</Title3>
              <IconButtons1>
                <Icon1>💗</Icon1>
                <Icon1>🛍️</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>Warm winter coat for boys</Title6>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Boys Winter Coat</Title7>
              <Title3>$39.99</Title3>
              <IconButtons1>
                <Icon1>💗</Icon1>
                <Icon1>🛍️</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
          <Card>
            <ImageContainer>
              <Image1>
                <Title6>Cute backpack for girls</Title6>
              </Image1>
            </ImageContainer>
            <TextContent>
              <Title7>Girls Backpack</Title7>
              <Title3>$19.99</Title3>
              <IconButtons1>
                <Icon1>💗</Icon1>
                <Icon1>🛍️</Icon1>
              </IconButtons1>
            </TextContent>
          </Card>
        </Row>
      </List>
      <BottomNav>
        <Tab3>
          <Icon21>🏠</Icon21>
          <Title26>Home</Title26>
        </Tab3>
        <Tab3>
          <Icon21>🛒</Icon21>
          <Title26>Cart</Title26>
        </Tab3>
        <Tab3>
          <Icon21>👤</Icon21>
          <Title26>Profile</Title26>
        </Tab3>
      </BottomNav>
    </PageRoot>
  );
};

export default Page;
