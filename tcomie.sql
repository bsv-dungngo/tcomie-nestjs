/*
 Navicat Premium Data Transfer

 Source Server         : ngoaingutinhoc
 Source Server Type    : PostgreSQL
 Source Server Version : 140010 (140010)
 Source Host           : localhost:5432
 Source Catalog        : tcomie
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 140010 (140010)
 File Encoding         : 65001

 Date: 19/02/2024 15:04:17
*/


-- ----------------------------
-- Type structure for courseenum
-- ----------------------------
DROP TYPE IF EXISTS "public"."courseenum";
CREATE TYPE "public"."courseenum" AS ENUM (
  'technology',
  'japanese'
);
ALTER TYPE "public"."courseenum" OWNER TO "postgres";

-- ----------------------------
-- Type structure for typearticleenum
-- ----------------------------
DROP TYPE IF EXISTS "public"."typearticleenum";
CREATE TYPE "public"."typearticleenum" AS ENUM (
  'news',
  'event'
);
ALTER TYPE "public"."typearticleenum" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for articles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."articles_id_seq";
CREATE SEQUENCE "public"."articles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."articles_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for contacts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."contacts_id_seq";
CREATE SEQUENCE "public"."contacts_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."contacts_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for courses_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."courses_id_seq";
CREATE SEQUENCE "public"."courses_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."courses_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for permissions_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."permissions_id_seq";
CREATE SEQUENCE "public"."permissions_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."permissions_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for projects_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."projects_id_seq";
CREATE SEQUENCE "public"."projects_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."projects_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for resources_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."resources_id_seq";
CREATE SEQUENCE "public"."resources_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."resources_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roles_id_seq";
CREATE SEQUENCE "public"."roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."roles_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
ALTER SEQUENCE "public"."users_id_seq" OWNER TO "postgres";

-- ----------------------------
-- Table structure for alembic_version
-- ----------------------------
DROP TABLE IF EXISTS "public"."alembic_version";
CREATE TABLE "public"."alembic_version" (
  "version_num" varchar(32) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "public"."alembic_version" OWNER TO "postgres";

-- ----------------------------
-- Records of alembic_version
-- ----------------------------
BEGIN;
INSERT INTO "public"."alembic_version" ("version_num") VALUES ('a85e44c53c91');
COMMIT;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS "public"."articles";
CREATE TABLE "public"."articles" (
  "id" int4 NOT NULL DEFAULT nextval('articles_id_seq'::regclass),
  "title_vi" varchar(255) COLLATE "pg_catalog"."default",
  "title_en" varchar(255) COLLATE "pg_catalog"."default",
  "slug_vi" varchar(255) COLLATE "pg_catalog"."default",
  "slug_en" varchar(255) COLLATE "pg_catalog"."default",
  "description_vi" text COLLATE "pg_catalog"."default",
  "description_en" text COLLATE "pg_catalog"."default",
  "content_vi" text COLLATE "pg_catalog"."default",
  "content_en" text COLLATE "pg_catalog"."default",
  "thumbnail" varchar(255) COLLATE "pg_catalog"."default",
  "position" int4,
  "is_published" bool NOT NULL,
  "type" "public"."typearticleenum" NOT NULL,
  "create_id" int4,
  "update_id" int4,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."articles" OWNER TO "postgres";

-- ----------------------------
-- Records of articles
-- ----------------------------
BEGIN;
INSERT INTO "public"."articles" ("id", "title_vi", "title_en", "slug_vi", "slug_en", "description_vi", "description_en", "content_vi", "content_en", "thumbnail", "position", "is_published", "type", "create_id", "update_id", "created_at", "updated_at", "deleted_at") VALUES (1, 'Người dùng S24 Ultra tại Ấn Độ báo lỗi camera khi chuyển chế độ zoom', 'S24 Ultra users in India reported camera errors when switching zoom mode', 'nguoi-dung-s24-ultra-tai-an-do-bao-loi-camera-khi-chuyen-che-do-zoom-403508', 's24-ultra-users-in-india-reported-camera-errors-when-switching-zoom-mode-VVQ3TC', 'Những báo cáo ban đầu cho thấy lỗi đều nằm ở lô hàng S24 Ultra đầu tiên xuất xưởng. Samsung đã khắc phục vấn đề này trong các đợt hàng sau.', 'Initial reports showed that the error was in the first batch of S24 Ultra shipped. Samsung has fixed this problem in later batches.', '<p><strong>Những báo cáo ban đầu cho thấy lỗi đều nằm ở lô hàng S24 Ultra đầu tiên xuất xưởng. Samsung đã khắc phục vấn đề này trong các đợt hàng sau.</strong></p><p class="ql-align-center"><span style="color: rgb(0, 0, 0); background-color: transparent;">Ảnh chụp bằng S24 bị lệch nhẹ khi zoom. Ảnh: Android Authority.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_04/Some_Galaxy_S24_Ultra_units_have.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_04/Some_Galaxy_S24_Ultra_units_have.jpg"></span>Ảnh chụp bằng S24 bị lệch nhẹ khi zoom. Ảnh:&nbsp;<em style="background-color: transparent;">Android Authority</em>.</p><p>Chỉ mới ra mắt vài tuần, nhưng tình trạng lỗi camera Galaxy S24 Ultra bị phát hiện trên nhiều thiết bị, đa số thuộc lô hàng đầu tiên. Trên mạng xã hội X, người dùng Ấn Độ có tài khoản @smasithick là người đầu tiên phát hiện và báo cáo sự cố đến Samsung, và được xác nhận là lỗi phần cứng do nhà sản xuất.</p><p>Theo thông số hãng công bố, Galaxy S24 Ultra được trang bị bộ 4 camera với camera chính 200 MP, ống kính siêu rộng 12 MP, camera zoom quang 10 MP 3x và camera zoom quang 50 MP 5x.</p><p>Khi chụp ảnh và quay video, nó có thể tự động chuyển sang ống kính phù hợp dựa trên mức zoom, ánh sáng và khoảng cách đến đối tượng. Người dùng cũng có thể chọn thủ công ống kính muốn chụp.</p><p>Thông thường, việc chuyển đổi diễn ra mượt mà giống như đang phóng to, thu nhỏ bằng cùng một ống kính. Tuy nhiên, người dùng @smasithick gần đây nhận thấy việc đổi giữa camera chính và 2 camera zoom lag nhẹ, khiến hình ảnh trên Galaxy S24 Ultra của họ bị lệch. Smartphone không zoom vào chủ thể một cách mượt mà, đặc biệt là khi lấy nét vào các vật thể ở gần.</p><p>Trong đoạn video anh đăng tải, quả thật khi chuyển đổi chế độ zoom giữa 1x, 3x và 5x, giao diện camera có giật nhẹ. Bình luận bên dưới, một người khác cho rằng nguyên nhân có thể là do điện thoại chuyển đổi vật lý giữa các camera.</p><p class="ql-align-center"><span style="color: rgb(0, 0, 0); background-color: transparent;">Ảnh bị lệch nhẹ khi zoom. Ảnh: smasithick.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_e52ae786ac.gif" alt="S24 Ultra loi phan cung anh 2"></span></p><p class="ql-align-center"><span style="color: rgb(0, 0, 0); background-color: transparent;">Ảnh bị lệch nhẹ khi zoom. Ảnh: smasithick.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_31c8f49a51.gif" alt="S24 Ultra loi phan cung anh 1"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_31c8f49a51.gif" alt="S24 Ultra loi phan cung anh 1"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_e52ae786ac.gif" alt="S24 Ultra loi phan cung anh 2"></span></p><p class="ql-align-center">Ảnh bị lệch nhẹ khi zoom. Ảnh:&nbsp;<em style="background-color: transparent;">smasithick.</em></p><p>Tuy nhiên, @smasithick không đồng ý và nói rằng Galaxy S24 Ultra trưng bày tại showroom của Samsung vẫn hoạt động bình thường. Anh còn cho biết thêm ảnh chụp chế độ chân dung trên máy trông có vẻ nhiễu hạt, trong khi ảnh zoom 5x và 10x lại khá xỉn màu.</p><p>Sau đó, người dùng này đã đến trung tâm dịch vụ của Samsung gần đó và báo lỗi với nhân viên. Ban đầu, họ phủ nhận mọi vấn đề và cho biết camera vẫn hoạt động bình thường trên Galaxy S24 Ultra.</p><p><br></p>', '<p><strong>Những báo cáo ban đầu cho thấy lỗi đều nằm ở lô hàng S24 Ultra đầu tiên xuất xưởng. Samsung đã khắc phục vấn đề này trong các đợt hàng sau.</strong></p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Ảnh chụp bằng S24 bị lệch nhẹ khi zoom. Ảnh: Android Authority.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_04/Some_Galaxy_S24_Ultra_units_have.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_04/Some_Galaxy_S24_Ultra_units_have.jpg"></span>Ảnh chụp bằng S24 bị lệch nhẹ khi zoom. Ảnh:&nbsp;<em style="background-color: transparent;">Android Authority</em>.</p><p>Chỉ mới ra mắt vài tuần, nhưng tình trạng lỗi camera Galaxy S24 Ultra bị phát hiện trên nhiều thiết bị, đa số thuộc lô hàng đầu tiên. Trên mạng xã hội X, người dùng Ấn Độ có tài khoản @smasithick là người đầu tiên phát hiện và báo cáo sự cố đến Samsung, và được xác nhận là lỗi phần cứng do nhà sản xuất.</p><p>Theo thông số hãng công bố, Galaxy S24 Ultra được trang bị bộ 4 camera với camera chính 200 MP, ống kính siêu rộng 12 MP, camera zoom quang 10 MP 3x và camera zoom quang 50 MP 5x.</p><p>Khi chụp ảnh và quay video, nó có thể tự động chuyển sang ống kính phù hợp dựa trên mức zoom, ánh sáng và khoảng cách đến đối tượng. Người dùng cũng có thể chọn thủ công ống kính muốn chụp.</p><p>Thông thường, việc chuyển đổi diễn ra mượt mà giống như đang phóng to, thu nhỏ bằng cùng một ống kính. Tuy nhiên, người dùng @smasithick gần đây nhận thấy việc đổi giữa camera chính và 2 camera zoom lag nhẹ, khiến hình ảnh trên Galaxy S24 Ultra của họ bị lệch. Smartphone không zoom vào chủ thể một cách mượt mà, đặc biệt là khi lấy nét vào các vật thể ở gần.</p><p>Trong đoạn video anh đăng tải, quả thật khi chuyển đổi chế độ zoom giữa 1x, 3x và 5x, giao diện camera có giật nhẹ. Bình luận bên dưới, một người khác cho rằng nguyên nhân có thể là do điện thoại chuyển đổi vật lý giữa các camera.</p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Ảnh bị lệch nhẹ khi zoom. Ảnh: smasithick.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_e52ae786ac.gif" alt="S24 Ultra loi phan cung anh 2"></span></p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Ảnh bị lệch nhẹ khi zoom. Ảnh: smasithick.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_31c8f49a51.gif" alt="S24 Ultra loi phan cung anh 1"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_31c8f49a51.gif" alt="S24 Ultra loi phan cung anh 1"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/Uploaded/spluaaa/2024_02_04/ezgif_3_e52ae786ac.gif" alt="S24 Ultra loi phan cung anh 2"></span></p><p class="ql-align-center">Ảnh bị lệch nhẹ khi zoom. Ảnh:&nbsp;<em style="background-color: transparent;">smasithick.</em></p><p>Tuy nhiên, @smasithick không đồng ý và nói rằng Galaxy S24 Ultra trưng bày tại showroom của Samsung vẫn hoạt động bình thường. Anh còn cho biết thêm ảnh chụp chế độ chân dung trên máy trông có vẻ nhiễu hạt, trong khi ảnh zoom 5x và 10x lại khá xỉn màu.</p><p>Sau đó, người dùng này đã đến trung tâm dịch vụ của Samsung gần đó và báo lỗi với nhân viên. Ban đầu, họ phủ nhận mọi vấn đề và cho biết camera vẫn hoạt động bình thường trên Galaxy S24 Ultra.</p>', 'https://api.tcomie.com/public/uploads/2024/02/05/K7QQJE4.webp', 0, 't', 'news', 1, 1, '2024-02-05 16:03:56.662513', '2024-02-05 16:03:56.662519', NULL);
INSERT INTO "public"."articles" ("id", "title_vi", "title_en", "slug_vi", "slug_en", "description_vi", "description_en", "content_vi", "content_en", "thumbnail", "position", "is_published", "type", "create_id", "update_id", "created_at", "updated_at", "deleted_at") VALUES (2, 'Chủ tịch Samsung Lee Jae-yong trắng án', 'Samsung Chairman Lee Jae-yong was acquitted', 'chu-tich-samsung-lee-jae-yong-trang-an-XITG5R', 'samsung-chairman-lee-jae-yong-was-acquitted-JCQCNG', 'Ông Lee vô tội trước cáo buộc thao túng giá cổ phiếu và gian lận kế toán vào năm 2015, theo phán quyết của Tòa án Cấp cao Seoul ngày 5/2', 'Mr. Lee was innocent of charges of stock price manipulation and accounting fraud in 2015, according to the decision of the Seoul High Court on February 5.', '<p><strong>Ông Lee vô tội trước cáo buộc thao túng giá cổ phiếu và gian lận kế toán vào năm 2015, theo phán quyết của Tòa án Cấp cao Seoul ngày 5/2.</strong></p><p class="ql-align-center"><span style="color: rgb(0, 0, 0); background-color: transparent;">Phán quyết trắng án xóa bỏ mối đe dọa ngồi tù đã đeo bám ông Lee Jae-yong trong hơn một thập kỷ. Ảnh: AP.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/urnpublicidap.org25c2d43902f61c7.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_05/urnpublicidap.org25c2d43902f61c7.jpg"></span>Phán quyết trắng án xóa bỏ mối đe dọa ngồi tù đã đeo bám ông Lee Jae-yong trong hơn một thập kỷ. Ảnh:&nbsp;<em style="background-color: transparent;">AP</em>.</p><p>Công tố viên đã yêu cầu mức án 5 năm tù vào tháng 11/2023. Ông Lee Jae-yong bị nghi ngờ liên quan đến vụ sáp nhập giữa Cheil Industries - hãng thời trang mà Lee nắm nhiều cổ phần nhất - với công ty xây dựng Samsung C&amp;T.</p><p>Công tố viên cho rằng các điều khoản sáp nhập, bao gồm giá cổ phiếu của Cheil cao gấp 3 lần Samsung C&amp;T, đã bị thao túng để Lee dễ dàng kiểm soát C&amp;T, sau đó là đế chế Samsung.</p><p>Tuy nhiên, vị chủ tịch phủ nhận mọi cáo buộc. Lee Jae-yong khẳng định rằng việc sáp nhập là một phần của “hoạt động kinh doanh bình thường”. Ông và các giám đốc điều hành khác hành động như vậy vì tin rằng việc sáp nhập sẽ mang lại lợi ích cho các cổ đông.</p><p>“Tôi chưa bao giờ ưu tiên lợi ích cá nhân của mình trong quá trình sáp nhập Samsung C&amp;T và Cheil Industries”, ông nói.</p><p>Phán quyết đầy bất ngờ của tòa án vẫn có thể bị công tố viên kháng cáo.&nbsp;<em style="background-color: transparent;">Bloomberg</em>&nbsp;nhận định ông Lee đã giành được chiến thắng quan trọng trước tòa án, đồng thời xóa bỏ mối đe dọa ngồi tù đã đeo bám người thừa kế tập đoàn Samsung trong hơn một thập kỷ.</p><p>Trước đó, Lee Jae-yong từng bị kết án vào năm 2017 về tội hối lộ cựu Tổng thống Hàn Quốc Park Geun-hye. Công tố viên truy tố ông với tội danh hối lộ và tham nhũng cùng bản án 5 năm tù. Đơn kiện cáo buộc vị chủ tịch biển thủ công quỹ&nbsp;7,4 triệu USD&nbsp;để hối lộ bà Park Geun-hye, đổi lại chính quyền Seoul ủng hộ ông củng cố quyền kiểm soát Samsung.</p><p>2 năm tiếp theo là thời điểm vụ án liên tục nhận đơn kháng cáo và tái thẩm của hệ thống tòa án trên cả nước. Khi Tòa án tối cao Seoul giảm án và trả tự do cho Lee Jae-yong vào năm 2018, Tòa án tối cao quốc gia lại ra lệnh xét xử lại vào năm 2019.</p><p><br></p>', '<p><strong>Ông Lee vô tội trước cáo buộc thao túng giá cổ phiếu và gian lận kế toán vào năm 2015, theo phán quyết của Tòa án Cấp cao Seoul ngày 5/2.</strong></p><p class="ql-align-center"><span style="color: rgb(0, 0, 0); background-color: transparent;">Phán quyết trắng án xóa bỏ mối đe dọa ngồi tù đã đeo bám ông Lee Jae-yong trong hơn một thập kỷ. Ảnh: AP.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/urnpublicidap.org25c2d43902f61c7.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_05/urnpublicidap.org25c2d43902f61c7.jpg"></span>Phán quyết trắng án xóa bỏ mối đe dọa ngồi tù đã đeo bám ông Lee Jae-yong trong hơn một thập kỷ. Ảnh:&nbsp;<em style="background-color: transparent;">AP</em>.</p><p>Công tố viên đã yêu cầu mức án 5 năm tù vào tháng 11/2023. Ông Lee Jae-yong bị nghi ngờ liên quan đến vụ sáp nhập giữa Cheil Industries - hãng thời trang mà Lee nắm nhiều cổ phần nhất - với công ty xây dựng Samsung C&amp;T.</p><p>Công tố viên cho rằng các điều khoản sáp nhập, bao gồm giá cổ phiếu của Cheil cao gấp 3 lần Samsung C&amp;T, đã bị thao túng để Lee dễ dàng kiểm soát C&amp;T, sau đó là đế chế Samsung.</p><p>Tuy nhiên, vị chủ tịch phủ nhận mọi cáo buộc. Lee Jae-yong khẳng định rằng việc sáp nhập là một phần của “hoạt động kinh doanh bình thường”. Ông và các giám đốc điều hành khác hành động như vậy vì tin rằng việc sáp nhập sẽ mang lại lợi ích cho các cổ đông.</p><p>“Tôi chưa bao giờ ưu tiên lợi ích cá nhân của mình trong quá trình sáp nhập Samsung C&amp;T và Cheil Industries”, ông nói.</p><p>Phán quyết đầy bất ngờ của tòa án vẫn có thể bị công tố viên kháng cáo.&nbsp;<em style="background-color: transparent;">Bloomberg</em>&nbsp;nhận định ông Lee đã giành được chiến thắng quan trọng trước tòa án, đồng thời xóa bỏ mối đe dọa ngồi tù đã đeo bám người thừa kế tập đoàn Samsung trong hơn một thập kỷ.</p><p>Trước đó, Lee Jae-yong từng bị kết án vào năm 2017 về tội hối lộ cựu Tổng thống Hàn Quốc Park Geun-hye. Công tố viên truy tố ông với tội danh hối lộ và tham nhũng cùng bản án 5 năm tù. Đơn kiện cáo buộc vị chủ tịch biển thủ công quỹ&nbsp;7,4 triệu USD&nbsp;để hối lộ bà Park Geun-hye, đổi lại chính quyền Seoul ủng hộ ông củng cố quyền kiểm soát Samsung.</p><p>2 năm tiếp theo là thời điểm vụ án liên tục nhận đơn kháng cáo và tái thẩm của hệ thống tòa án trên cả nước. Khi Tòa án tối cao Seoul giảm án và trả tự do cho Lee Jae-yong vào năm 2018, Tòa án tối cao quốc gia lại ra lệnh xét xử lại vào năm 2019.</p>', 'https://api.tcomie.com/public/uploads/2024/02/05/O9Q5YZQ.webp', 0, 't', 'news', 1, 1, '2024-02-05 16:06:35.296965', '2024-02-05 16:06:35.29697', NULL);
COMMIT;

-- ----------------------------
-- Table structure for contacts
-- ----------------------------
DROP TABLE IF EXISTS "public"."contacts";
CREATE TABLE "public"."contacts" (
  "id" int4 NOT NULL DEFAULT nextval('contacts_id_seq'::regclass),
  "fullname" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "phone" varchar(20) COLLATE "pg_catalog"."default",
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "message" text COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."contacts" OWNER TO "postgres";

-- ----------------------------
-- Records of contacts
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS "public"."courses";
CREATE TABLE "public"."courses" (
  "id" int4 NOT NULL DEFAULT nextval('courses_id_seq'::regclass),
  "title" varchar(255) COLLATE "pg_catalog"."default",
  "banner" varchar(255) COLLATE "pg_catalog"."default",
  "slug" varchar(255) COLLATE "pg_catalog"."default",
  "video_intro" varchar(255) COLLATE "pg_catalog"."default",
  "gallery" json,
  "description" text COLLATE "pg_catalog"."default",
  "target" json,
  "content" json,
  "type" "public"."courseenum" NOT NULL,
  "price_base" int4 NOT NULL,
  "price_discount" int4 NOT NULL,
  "total_student" int4 NOT NULL,
  "total_study_time" varchar(255) COLLATE "pg_catalog"."default",
  "total_hour" int4 NOT NULL,
  "is_published" bool NOT NULL,
  "start_course" date,
  "end_course" date,
  "total_downloadable_resource" int4 NOT NULL,
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."courses" OWNER TO "postgres";

-- ----------------------------
-- Records of courses
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS "public"."permissions";
CREATE TABLE "public"."permissions" (
  "id" int4 NOT NULL DEFAULT nextval('permissions_id_seq'::regclass),
  "resource_id" int4,
  "name" varchar COLLATE "pg_catalog"."default" NOT NULL,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."permissions" OWNER TO "postgres";

-- ----------------------------
-- Records of permissions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS "public"."projects";
CREATE TABLE "public"."projects" (
  "id" int4 NOT NULL DEFAULT nextval('projects_id_seq'::regclass),
  "title_vi" varchar(255) COLLATE "pg_catalog"."default",
  "title_en" varchar(255) COLLATE "pg_catalog"."default",
  "slug_vi" varchar(255) COLLATE "pg_catalog"."default",
  "slug_en" varchar(255) COLLATE "pg_catalog"."default",
  "description_vi" text COLLATE "pg_catalog"."default",
  "description_en" text COLLATE "pg_catalog"."default",
  "content_vi" text COLLATE "pg_catalog"."default",
  "content_en" text COLLATE "pg_catalog"."default",
  "thumbnail" varchar(255) COLLATE "pg_catalog"."default",
  "position" int4,
  "is_published" bool NOT NULL,
  "create_id" int4,
  "update_id" int4,
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."projects" OWNER TO "postgres";

-- ----------------------------
-- Records of projects
-- ----------------------------
BEGIN;
INSERT INTO "public"."projects" ("id", "title_vi", "title_en", "slug_vi", "slug_en", "description_vi", "description_en", "content_vi", "content_en", "thumbnail", "position", "is_published", "create_id", "update_id", "created_at", "updated_at", "deleted_at") VALUES (2, 'Thực hiện lắp đặt thiết bị Smart site IoT cho MobiFone khu vực 12 tỉnh Miền tây', 'Thực hiện lắp đặt thiết bị Smart site IoT cho MobiFone khu vực 12 tỉnh Miền tây', 'thuc-hien-lap-dat-thiet-bi-smart-site-iot-cho-mobifone-khu-vuc-12-tinh-mien-tay-VOU7W5', 'thuc-hien-lap-dat-thiet-bi-smart-site-iot-cho-mobifone-khu-vuc-12-tinh-mien-tay-GY6IVQ', 'Ông Lee vô tội trước cáo buộc thao túng giá cổ phiếu và gian lận kế toán vào năm 2015, theo phán quyết của Tòa án Cấp cao Seoul ngày 5/2.', 'Ông Lee vô tội trước cáo buộc thao túng giá cổ phiếu và gian lận kế toán vào năm 2015, theo phán quyết của Tòa án Cấp cao Seoul ngày 5/2.', '<p><strong>Bằng việc gửi mail thông báo chữ ký số của cá nhân, tổ chức đã hết hạn, đối tượng lừa đảo yêu cầu người dùng thực hiện thao tác gia hạn để lừa chiếm đoạt tài sản. Đây là hình thức</strong></p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh: ITRC.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/itrc_ss_website_login_signin_764348524.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_05/itrc_ss_website_login_signin_764348524.jpg"></span>Hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh:&nbsp;<em style="background-color: transparent;">ITRC</em>.</p><p>Trong bối cảnh chuyển đổi số tại Việt Nam đang được đẩy nhanh, không chỉ doanh nghiệp mà cả người dùng cá nhân cũng đã bắt đầu sử dụng chữ ký số.</p><p>Triển khai áp dụng chữ ký số rộng rãi sẽ gia tăng sự tin tưởng của người dân, doanh nghiệp và các tổ chức khi thực hiện các giao dịch trên môi trường điện tử, nâng cao hiệu quả và hiệu lực hoạt động của các dịch vụ công do Chính phủ cung cấp tới người dân, doanh nghiệp.</p><p>Theo thống kê của Trung tâm Chứng thực điện tử quốc gia – NEAC thuộc Bộ TT&amp;TT, tính đến quý III/2023, cả nước có hơn 7,8 triệu chứng thư số được cấp, gồm 7,1 triệu chứng thư số công cộng và 700.000 chứng thư số chuyên dùng Chính phủ.</p><p>Trong đó, tổng chứng thư số cá nhân đã cấp đạt 2 triệu gồm 1,5 triệu chứng thư số công cộng và 490.000 chứng thư số chuyên dùng Chính phủ; Tổng chứng thư số tổ chức và doanh nghiệp là 5,8 triệu, gồm 5,6 triệu chứng thư số công cộng và 210.000 chứng thư số chuyên dùng Chính phủ.</p><p>Ước tính đến hết năm 2023, số lượng chứng thư số đang hoạt động sẽ đạt hơn 3,6 triệu, tăng 50% so với cùng kỳ năm ngoái. Đáng chú ý, đến nay 100% doanh nghiệp tại Việt Nam đã sử dụng chữ ký số, chủ yếu dùng trong các dịch vụ như kê khai thuế, hải quan, bảo hiểm xã hội...</p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC vừa cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh: T.Hồng.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/w_nguoi_dung_chu_ky_so_1_1_1_382.jpg" alt="Lua dao chu ky so anh 1" height="1555" width="1200"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/w_nguoi_dung_chu_ky_so_1_1_1_382.jpg" alt="Lua dao chu ky so anh 1" height="1555" width="1200"></span>Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC vừa cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh:&nbsp;<em style="background-color: transparent;">T.Hồng.</em></p><p>Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC, Cục An toàn thông tin (Bộ TT&amp;TT) vừa có cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số.</p>', '<p><strong>Bằng việc gửi mail thông báo chữ ký số của cá nhân, tổ chức đã hết hạn, đối tượng lừa đảo yêu cầu người dùng thực hiện thao tác gia hạn để lừa chiếm đoạt tài sản. Đây là hình thức</strong></p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh: ITRC.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/itrc_ss_website_login_signin_764348524.jpg"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w960/Uploaded/spluaaa/2024_02_05/itrc_ss_website_login_signin_764348524.jpg"></span>Hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh:&nbsp;<em style="background-color: transparent;">ITRC</em>.</p><p>Trong bối cảnh chuyển đổi số tại Việt Nam đang được đẩy nhanh, không chỉ doanh nghiệp mà cả người dùng cá nhân cũng đã bắt đầu sử dụng chữ ký số.</p><p>Triển khai áp dụng chữ ký số rộng rãi sẽ gia tăng sự tin tưởng của người dân, doanh nghiệp và các tổ chức khi thực hiện các giao dịch trên môi trường điện tử, nâng cao hiệu quả và hiệu lực hoạt động của các dịch vụ công do Chính phủ cung cấp tới người dân, doanh nghiệp.</p><p>Theo thống kê của Trung tâm Chứng thực điện tử quốc gia – NEAC thuộc Bộ TT&amp;TT, tính đến quý III/2023, cả nước có hơn 7,8 triệu chứng thư số được cấp, gồm 7,1 triệu chứng thư số công cộng và 700.000 chứng thư số chuyên dùng Chính phủ.</p><p>Trong đó, tổng chứng thư số cá nhân đã cấp đạt 2 triệu gồm 1,5 triệu chứng thư số công cộng và 490.000 chứng thư số chuyên dùng Chính phủ; Tổng chứng thư số tổ chức và doanh nghiệp là 5,8 triệu, gồm 5,6 triệu chứng thư số công cộng và 210.000 chứng thư số chuyên dùng Chính phủ.</p><p>Ước tính đến hết năm 2023, số lượng chứng thư số đang hoạt động sẽ đạt hơn 3,6 triệu, tăng 50% so với cùng kỳ năm ngoái. Đáng chú ý, đến nay 100% doanh nghiệp tại Việt Nam đã sử dụng chữ ký số, chủ yếu dùng trong các dịch vụ như kê khai thuế, hải quan, bảo hiểm xã hội...</p><p class="ql-align-center"><span style="background-color: transparent; color: rgb(0, 0, 0);">Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC vừa cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh: T.Hồng.</span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/w_nguoi_dung_chu_ky_so_1_1_1_382.jpg" alt="Lua dao chu ky so anh 1" height="1555" width="1200"></span></p><p class="ql-align-center"><span style="background-color: rgb(241, 241, 241);"><img src="https://photo.znews.vn/w1920/Uploaded/spluaaa/2024_02_05/w_nguoi_dung_chu_ky_so_1_1_1_382.jpg" alt="Lua dao chu ky so anh 1" height="1555" width="1200"></span>Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC vừa cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số. Ảnh:&nbsp;<em style="background-color: transparent;">T.Hồng.</em></p><p>Trung tâm Ứng cứu khẩn cấp không gian mạng Việt Nam – VNCERT/CC, Cục An toàn thông tin (Bộ TT&amp;TT) vừa có cảnh báo về hình thức lừa đảo mới nhắm vào các cá nhân, tổ chức sử dụng chữ ký số.</p>', NULL, 0, 't', 1, 1, '2024-02-05 10:59:16.395288', '2024-02-05 10:59:16.395294', NULL);
INSERT INTO "public"."projects" ("id", "title_vi", "title_en", "slug_vi", "slug_en", "description_vi", "description_en", "content_vi", "content_en", "thumbnail", "position", "is_published", "create_id", "update_id", "created_at", "updated_at", "deleted_at") VALUES (1, 'Vận hành hệ thống tối ưu hóa tự động cho nhà mạng di động Mobifone tại Việt Nam.', 'Vận hành hệ thống tối ưu hóa tự động cho nhà mạng di động Mobifone tại Việt Nam.', '1-LND06A', '1-79OIQA', '2', '2', NULL, NULL, NULL, 0, 't', 1, 1, '2024-02-05 10:57:09.433445', '2024-02-05 10:57:09.43345', '2024-02-05 16:10:00.337266');
COMMIT;

-- ----------------------------
-- Table structure for resources
-- ----------------------------
DROP TABLE IF EXISTS "public"."resources";
CREATE TABLE "public"."resources" (
  "id" int4 NOT NULL DEFAULT nextval('resources_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."resources" OWNER TO "postgres";

-- ----------------------------
-- Records of resources
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."roles" OWNER TO "postgres";

-- ----------------------------
-- Records of roles
-- ----------------------------
BEGIN;
INSERT INTO "public"."roles" ("id", "name", "created_at", "updated_at", "deleted_at") VALUES (1, 'admin', '2024-02-05 10:55:52.477046', '2024-02-05 10:55:52.477053', NULL);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "role_id" int4 NOT NULL,
  "fullname" varchar(255) COLLATE "pg_catalog"."default",
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "hashed_password" varchar COLLATE "pg_catalog"."default",
  "created_at" timestamp(6) NOT NULL,
  "updated_at" timestamp(6) NOT NULL,
  "deleted_at" timestamp(6)
)
;
ALTER TABLE "public"."users" OWNER TO "postgres";

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO "public"."users" ("id", "role_id", "fullname", "username", "email", "hashed_password", "created_at", "updated_at", "deleted_at") VALUES (1, 1, 'Adminstrator', 'admin', 'admin@tcomie.com', '$2b$12$Bq/MZyHnw0sxJ8nEnp7MBOw9De4dHU6h1rJn61TVT8/5kRFMfGQ3W', '2024-02-05 10:56:26.742499', '2024-02-05 10:56:26.742505', NULL);
COMMIT;

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."articles_id_seq"
OWNED BY "public"."articles"."id";
SELECT setval('"public"."articles_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."contacts_id_seq"
OWNED BY "public"."contacts"."id";
SELECT setval('"public"."contacts_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."courses_id_seq"
OWNED BY "public"."courses"."id";
SELECT setval('"public"."courses_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."permissions_id_seq"
OWNED BY "public"."permissions"."id";
SELECT setval('"public"."permissions_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."projects_id_seq"
OWNED BY "public"."projects"."id";
SELECT setval('"public"."projects_id_seq"', 2, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."resources_id_seq"
OWNED BY "public"."resources"."id";
SELECT setval('"public"."resources_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."roles_id_seq"
OWNED BY "public"."roles"."id";
SELECT setval('"public"."roles_id_seq"', 1, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 1, true);

-- ----------------------------
-- Primary Key structure for table alembic_version
-- ----------------------------
ALTER TABLE "public"."alembic_version" ADD CONSTRAINT "alembic_version_pkc" PRIMARY KEY ("version_num");

-- ----------------------------
-- Indexes structure for table articles
-- ----------------------------
CREATE INDEX "ix_articles_slug_en" ON "public"."articles" USING btree (
  "slug_en" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "ix_articles_slug_vi" ON "public"."articles" USING btree (
  "slug_vi" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table articles
-- ----------------------------
ALTER TABLE "public"."articles" ADD CONSTRAINT "articles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table contacts
-- ----------------------------
CREATE INDEX "ix_contacts_fullname" ON "public"."contacts" USING btree (
  "fullname" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table contacts
-- ----------------------------
ALTER TABLE "public"."contacts" ADD CONSTRAINT "contacts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table courses
-- ----------------------------
CREATE INDEX "ix_courses_slug" ON "public"."courses" USING btree (
  "slug" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table courses
-- ----------------------------
ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table permissions
-- ----------------------------
CREATE INDEX "ix_permissions_name" ON "public"."permissions" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table permissions
-- ----------------------------
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table projects
-- ----------------------------
CREATE INDEX "ix_projects_slug_en" ON "public"."projects" USING btree (
  "slug_en" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "ix_projects_slug_vi" ON "public"."projects" USING btree (
  "slug_vi" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table projects
-- ----------------------------
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table resources
-- ----------------------------
CREATE INDEX "ix_resources_name" ON "public"."resources" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table resources
-- ----------------------------
ALTER TABLE "public"."resources" ADD CONSTRAINT "resources_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table roles
-- ----------------------------
CREATE INDEX "ix_roles_name" ON "public"."roles" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table users
-- ----------------------------
CREATE INDEX "ix_users_fullname" ON "public"."users" USING btree (
  "fullname" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table articles
-- ----------------------------
ALTER TABLE "public"."articles" ADD CONSTRAINT "articles_create_id_fkey" FOREIGN KEY ("create_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."articles" ADD CONSTRAINT "articles_update_id_fkey" FOREIGN KEY ("update_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table permissions
-- ----------------------------
ALTER TABLE "public"."permissions" ADD CONSTRAINT "permissions_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "public"."resources" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table projects
-- ----------------------------
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_create_id_fkey" FOREIGN KEY ("create_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_update_id_fkey" FOREIGN KEY ("update_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "public"."roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
