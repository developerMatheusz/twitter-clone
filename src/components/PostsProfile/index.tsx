import { ChangeEvent } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import Cover from "../Cover";
import Input from "../Input";
import Layout from "../Layout";
import PostContent, { PostContentProps } from "../PostContent";
import TopNavLink from "../TopNavLink";
import { Profile } from "../ProfileInfo";

type PostsProfileProps = {
  profileInfo: Profile;
  isMyProfile: boolean;
  updateUserImage: (type: string, src: ChangeEvent<HTMLInputElement>) => void;
  toogleFollow: () => void;
  isFollowing: boolean;
  editMode: boolean;
  cancel: () => void;
  posts: PostContentProps[];
  setEditMode: (value: boolean) => any;
  updateProfile: () => void;
  setProfileInfo: (value: any) => any;
  postsLikedByMe: string[] | null | undefined;
};

const PostsProfile = ({
  profileInfo,
  isFollowing,
  isMyProfile,
  updateUserImage,
  toogleFollow,
  editMode,
  cancel,
  posts,
  setEditMode,
  updateProfile,
  setProfileInfo,
  postsLikedByMe
}: PostsProfileProps) => {
  return (
    <Layout>
      {!!profileInfo && (
        <div>
          <div className="px-5 pt-2">
            <TopNavLink title={profileInfo.name} />
          </div>
          <Cover
            editable={isMyProfile}
            src={profileInfo.cover}
            onChange={(src) => updateUserImage("cover", src)}
          />
          <div className="flex justify-between">
            <div className="ml-5 relative">
              <div className="absolute -top-12 border-4 rounded-full border-black overflow-hidden">
                <Avatar
                  big
                  src={profileInfo.image}
                  editable={isMyProfile}
                  onChange={(src) => updateUserImage("image", src)}
                />
              </div>
            </div>
            <div className="p-2">
              {!isMyProfile && (
                <div>
                  {isFollowing && (
                    <Button onClick={toogleFollow} label="Seguindo" />
                  )}
                  {!isFollowing && (
                    <Button onClick={toogleFollow} label="Seguir" />
                  )}
                </div>
              )}
              {isMyProfile && (
                <div>
                  {!editMode && (
                    <Button onClick={setEditMode} label="Editar perfil" />
                  )}
                  {editMode && (
                    <div className="flex items-center">
                      <div className="px-1">
                        <Button onClick={cancel} label="Cancelar" />
                      </div>
                      <div className="px-1">
                        <Button onClick={updateProfile} label="Salvar perfil" />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="px-5 mt-2">
            {!editMode && (
              <div>
                <h1 className="font-bold text-xl text-white leading-4">
                  {profileInfo.name}
                </h1>
                <h2 className="text-twitterLightGray text-sm">
                  @{profileInfo.username}
                </h2>
                <div className="text-sm text-white mt-2 mb-2">
                  {profileInfo.bio}
                </div>
              </div>
            )}
            {editMode && (
              <div className="flex flex-col gap-2 mb-2">
                <Input
                  type="text"
                  value={profileInfo.name}
                  onChange={(
                    e:
                      | ChangeEvent<HTMLInputElement>
                      | ChangeEvent<HTMLTextAreaElement>
                  ) =>
                    setProfileInfo(
                      (
                        prev:
                          | ChangeEvent<HTMLInputElement>
                          | ChangeEvent<HTMLTextAreaElement>
                      ) => ({
                        ...prev,
                        name: e.target.value
                      })
                    )
                  }
                />
                <Input
                  type="text"
                  value={profileInfo.username}
                  onChange={(
                    e:
                      | ChangeEvent<HTMLInputElement>
                      | ChangeEvent<HTMLTextAreaElement>
                  ) =>
                    setProfileInfo(
                      (
                        prev:
                          | ChangeEvent<HTMLInputElement>
                          | ChangeEvent<HTMLTextAreaElement>
                      ) => ({
                        ...prev,
                        username: e.target.value
                      })
                    )
                  }
                />
                <Input
                  typeInput="textarea"
                  value={profileInfo.bio}
                  onChange={(
                    e:
                      | ChangeEvent<HTMLInputElement>
                      | ChangeEvent<HTMLTextAreaElement>
                  ) =>
                    setProfileInfo(
                      (
                        prev:
                          | ChangeEvent<HTMLInputElement>
                          | ChangeEvent<HTMLTextAreaElement>
                      ) => ({
                        ...prev,
                        bio: e.target.value
                      })
                    )
                  }
                />
              </div>
            )}
          </div>
        </div>
      )}
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post._id} className="p-5 border-t border-twitterBorder">
            <PostContent
              {...post}
              likedByMe={postsLikedByMe?.includes(post!._id!)}
            />
          </div>
        ))}
    </Layout>
  );
};

export default PostsProfile;
